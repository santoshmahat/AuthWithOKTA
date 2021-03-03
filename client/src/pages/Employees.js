import React, { useEffect, useState } from "react";
import axios from "axios";
import { useOktaAuth } from "@okta/okta-react";
import { Table } from "antd";

const Employees = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const [employees, setEmployees] = useState([]);

  const accessToken = oktaAuth.getAccessToken();

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
    },
  ];

  console.log("accessToken", accessToken, authState.accessToken);
  const fetchEmployees = async () => {
    const response = await axios.get(`http://localhost:5000/employees`, {
      headers: {
        Authorization: accessToken,
      },
    });
    setEmployees(response?.data?.employees || []);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);
  return (
    <div>
      <h3>Employees</h3>
      <Table columns={columns} dataSource={employees} />
    </div>
  );
};
export default Employees;
