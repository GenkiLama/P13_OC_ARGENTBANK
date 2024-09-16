import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
import Home from "./pages/home/Home"; 
import Navbar from "./component/navbar/Navbar"; 
import Footer from "./component/footer/Footer"; 
import Login from "./pages/login/Login"; 
import Profile from "./pages/profile/Profile"; 
import NotFound from "./pages/notFound/NotFound"; 
import { Navigate } from "react-router-dom"; 
import { useSelector } from "react-redux"; 

// Define the Layout functional component which wraps the main content with Navbar and Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar /> 
      {children} 
      <Footer /> 
    </>
  );
};

// Define the PrivateRoute functional component for protecting routes that require authentication
const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.login);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: (
        <Layout>
          <Outlet /> 
        </Layout>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;