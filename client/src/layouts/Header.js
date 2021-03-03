import React from "react";
import { Menu } from "antd";
import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const { isAuthenticated } = authState;

  const logoutHandler = () => {
    oktaAuth.signOut("/");
  };
  return (
    <Menu mode="horizontal">
      {!isAuthenticated && <Menu.Item>Login</Menu.Item>}
      {isAuthenticated && (
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item>
          <Link to="/employees">Employees</Link>
        </Menu.Item>
      )}
      {isAuthenticated && (
        <Menu.Item onClick={logoutHandler} style={{ float: "right" }}>
          Logout
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
