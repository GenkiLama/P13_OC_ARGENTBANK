import "./profile.scss";
import { useState } from "react";
import EditName from "../../component/editName/EditName";
import Account from "../../component/account/Account";
import { useSelector } from "react-redux";

const Profile = () => {
  const [editName, setEditName] = useState(false);
  const { user } = useSelector((state) => state.user);

  const handleEditName = () => {
    setEditName(!editName);
  };

  return (
    <div className="profile">
      <header className="profile_title">
        {editName ? (
          <>
            <h1>Welcome back</h1>
            <EditName handleEditName={handleEditName} />
          </>
        ) : (
          <>
            <h1>
              Welcome back <br />
              {user.firstName} {user.lastName} !
            </h1>
            <button type="button" onClick={() => setEditName(!editName)}>
              Edit Name
            </button>
          </>
        )}
      </header>
      <section>
        <Account />
      </section>
    </div>
  );
};

export default Profile;