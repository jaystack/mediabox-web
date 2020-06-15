import React from "react";

import LoginComponent from "../components/Login";

function Login() {
  return (
    <LoginComponent
      variant={[]}
      image={{
        alt: "",
        src:
          "images/home/Group-of-people-using-computer-to-share-files_1920px.jpg",
      }}
      lostPasswordUrl="https://godev.co.uk/lostpassword/"
      lostPasswordText="Lost your password?"
    />
  );
}

export default Login;
