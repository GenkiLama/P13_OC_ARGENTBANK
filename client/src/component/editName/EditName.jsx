
import "./editName.scss";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAsync } from "../../store/slices/userSlices";
import { setUser } from "../../store/slices/userSlices";
import { logout } from "../../store/slices/authSlices";

// Define the EditName functional component, which takes handleEditName as a prop
const EditName = ({ handleEditName }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const { token } = useSelector((state) => state.login);

  const [firstname, setFirstname] = useState(user ? user.firstName : "");

  const [lastname, setLastname] = useState(user ? user.lastName : "");

  const changeName = (e) => {
    e.preventDefault();

    dispatch(
      updateUserAsync({
        token: token,
        firstName: firstname,
        lastName: lastname,
      })
    )
      .then((data) => {
        if (data.error && data.error.message === "jwt expired") {
          dispatch(logout());
        }

        const { firstName, lastName } = data.payload;

        dispatch(setUser({ firstName, lastName }));

        handleEditName();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="editName">
      <div className="editName_group">
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <button type="submit" onClick={changeName}>
          Save
        </button>
      </div>
      <div className="editName_group">
        <input
          type="text"
          name="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <button type="button" onClick={handleEditName}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditName;
