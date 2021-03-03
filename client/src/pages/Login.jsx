import { Button } from "antd";
import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const loginHandler = () => {
    oktaAuth.signInWithRedirect();
  };
  return (
    <div>
      <h3> Welome to OKTA Auth</h3>
      <h4>Please Click on Login button to proceed:</h4>
      <Button type="primary" onClick={loginHandler}>
        Login
      </Button>
    </div>
  );
};

export default Login;
