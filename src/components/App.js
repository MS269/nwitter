import React, { useEffect, useState } from "react";

import { authService } from "fb";

import AppRouter from "components/Router";

const App = () => {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => setUserObj({ ...authService.currentUser });

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "Initializing..."
      )}
    </>
  );
};

export default App;
