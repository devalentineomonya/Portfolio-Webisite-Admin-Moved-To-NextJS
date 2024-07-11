import { Breadcrumb, Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./App.css";
import AsideNavigation from "./components/AsideNavigation/AsideNavigation";
import Typography from "antd/es/typography/Typography";
import Title from "antd/es/typography/Title";
import Dashboard from "./pages/Dashboard";

function App() {
  const breadcrumbItems = [
    {
      title: "Home",
    },
    {
      title: "Application Center",
      href: "",
    },
    {
      title: "Application List",
      href: "",
    },
    {
      title: "An Application",
    },
  ];
  return (
    <Layout>
      <Header className="header">header</Header>
      <Layout>
        <Sider
          className="aside"
          style={{
            width: 256,
          }}
        >
          <AsideNavigation />
        </Sider>

        <Content>
          <Header className="main-content-header">
            <Title className="main-content-title" level={3}>
              Dashboard
            </Title>
            <Breadcrumb
              separator=">"
              items={breadcrumbItems}
              className="main-content-breadcrumb"
            />
          </Header>
         <Dashboard/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
