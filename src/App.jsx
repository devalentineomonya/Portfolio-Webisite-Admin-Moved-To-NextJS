import { Breadcrumb, Button, Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./App.css";
import AsideNavigation from "./components/AsideNavigation/AsideNavigation";
import Dashboard from "./pages/Dashboard";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
  return (
    <Layout>
      <Header className="header">

        <HeaderComponent />
      </Header>
      <Layout>
        <Sider width={250} theme="light" className="aside">
          <AsideNavigation />
        </Sider>

        <Content className="main-content">
          <Dashboard />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
