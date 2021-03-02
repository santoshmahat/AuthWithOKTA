import React from "react";
import { Layout } from "antd";
import Header from "./Header";
import AppHolder from "./styled";

const AppLayout = ({ children }) => {
  return (
    <AppHolder>
      <Layout>
        <Layout.Header>
          <Header />
        </Layout.Header>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </AppHolder>
  );
};

export default AppLayout;
