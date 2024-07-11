import { Breadcrumb, Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./App.css";
import AsideNavigation from "./components/AsideNavigation/AsideNavigation";

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
            <div className="main-content-title">
              Dashboard
            </div>
            <Breadcrumb separator=">" items={breadcrumbItems} className="main-content-breadcrumb" />
          </Header>
          main content
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
