import React, { useEffect } from "react";
import axios from "axios";
import { useOktaAuth } from "@okta/okta-react";

const Employees = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const accessToken = oktaAuth.getAccessToken();
  const fetchEmployees = () => {
    const response = axios.get(`http://localhost:5000/employees`, {
      headers: {
        Authorization: accessToken,
      },
    });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  return <div>Employees</div>;
};
export default Employees;
