import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import AppLayout from "./layouts";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Employees from "./pages/Employees";

const Router = () => {
  console.log(
    "REACT_APP_OKTA_CLIENT_ID",
    process.env.REACT_APP_OKTA_CLIENT_ID,
    `${window.location.origin}/login/callback`
  );
  const oktaAuth = new OktaAuth({
    issuer: process.env.REACT_APP_OKTA_ISSUER,
    redirectUri: `${window.location.origin}/login/callback`,
    clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  });

  return (
    <BrowserRouter>
      <Security oktaAuth={oktaAuth}>
        <AppLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login/callback" component={LoginCallback} />
            <Route path="/profile" component={Profile} />
            <Route path="/employees" component={Employees} />
          </Switch>
        </AppLayout>
      </Security>
    </BrowserRouter>
  );
};

export default Router;
