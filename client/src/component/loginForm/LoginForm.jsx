
import { CircleUserRound } from "lucide-react"; 
import { useEffect, useState } from "react"; // React hooks for state and side effects
import { loginAsync } from "../../store/slices/authSlices"; // Async action for login
import { getUserAsync } from "../../store/slices/userSlices"; // Async action to get user data
import { useDispatch, useSelector } from "react-redux"; // Redux hooks for dispatching actions and selecting state
import { useNavigate } from "react-router-dom"; // Hook for navigation

// Define the LoginForm functional component
const LoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error: messageError, loading, token } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setError("Please fill in all fields"); 
      return;
    } else {
      setError(""); 
      try {
        console.log(email, password); 
        dispatch(loginAsync({ email, password })); 
      } catch (error) {
        console.log(error); 
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/profile"); 
      dispatch(getUserAsync(token)); 
    }
  }, [token, navigate, dispatch]); 

  // Render the login form
  return (
    <div className="login_wrapper">
      <div className="login_wrapper_title">
        <CircleUserRound />
        <h1>Sign in</h1>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)} 
        className="login_wrapper_form"
        noValidate 
      >
        <div className="login_wrapper_form_group">
          <label htmlFor="email">Email</label> 
          <input
            type="email"
            id="email"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="login_wrapper_form_group">
          <label htmlFor="password">Password</label> 
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="login_wrapper_form_check">
          <input type="checkbox" id="remember" name="remember" /> 
          <label htmlFor="remember">Remember me</label> 
        </div>
        <button className="login_wrapper_form_btn" type="submit">
          {loading ? (
            <div className="login_wrapper_form_spinner"></div>
          ) : (
            "Sign in" 
          )}
        </button>
        
        {error ? (
          <div className="login_wrapper_form_error">{error}</div> 
        ) : (
          messageError && (
            <div className="login_wrapper_form_error">{messageError}</div> 
          )
        )}
      </form>
    </div>
  );
};

// Export the LoginForm component as the default export
export default LoginForm;