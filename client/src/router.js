import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import AppLayout from "./layouts";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Employees from "./pages/Employees";

const Router = () => {
  const history = useHistory();

  const oktaAuth = new OktaAuth({
    issuer: process.env.REACT_APP_OKTA_ISSUER,
    redirectUri: `${window.location.origin}/login/callback`,
    clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  });

  const onAuthRequired = () => {
    history.push("/login");
  };

  return (
    <Security oktaAuth={oktaAuth} onAuthRequired={onAuthRequired}>
      <AppLayout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/callback" component={LoginCallback} />
          <SecureRoute exact path="/" component={Home} />
          <SecureRoute exact path="/employees" component={Employees} />
        </Switch>
      </AppLayout>
    </Security>
  );
};

export default Router;
