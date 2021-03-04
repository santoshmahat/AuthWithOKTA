import React, { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import styled from "styled-components";
import axios from "axios";

const RegisterWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.3);

  /* display: flex; */
  /* justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

const Register = () => {
  const [formValues, setFormValues] = useState({});
  const registerHandler = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/users`,
      formValues
    );
  };

  console.log("formValues", formValues);

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <RegisterWrapper>
      <h3>Register</h3>
      <p>All field are required</p>
      <Form>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <label>First Name:</label>
              <Input name="firstName" onChange={handleInputChange} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <label>Last Name:</label>
              <Input name="lastName" onChange={handleInputChange} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item>
              <label>Email:</label>
              <Input name="email" onChange={handleInputChange} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item>
              <label>Password:</label>
              <Input name="password" onChange={handleInputChange} />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Item>
              <Button type="primary" onClick={registerHandler}>
                Register
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </RegisterWrapper>
  );
};
export default Register;
