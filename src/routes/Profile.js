import React from "react";
import { useHistory } from "react-router-dom";

import { authService } from "fb";

const Profile = () => {
  const history = useHistory();

  const onSignOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <>
      <button onClick={onSignOutClick}>Sign Out</button>
    </>
  );
};

export default Profile;
