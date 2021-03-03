import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

const Home = () => {
  const { oktaAuth } = useOktaAuth();
  const [user, setUser] = useState({});

  const getUser = async () => {
    const profile = await oktaAuth.getUser();
    setUser(profile);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2>Welcome to home page</h2>
      <h3>Profile</h3>
      <div>Id: {user.sub || "N/A"}</div>
      <div>Name: {user.name || "N/A"}</div>
      <div>Email: {user.email || "N/A"}</div>
    </div>
  );
};
export default Home;
