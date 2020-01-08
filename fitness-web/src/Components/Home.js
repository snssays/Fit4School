import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { LoginContext } from "../App";
function Home() {
  const loginContext = useContext(LoginContext);

  return (
    <React.Fragment>
      <p> User is logged in - Home Page </p>
      {console.log(
        `Authentication status of the user is ${loginContext.loginStatus}`
      )}
      <Button onClick={loginContext.toggleLoginStatus}>Log out</Button>
    </React.Fragment>
  );
}

export default Home;
