import { Button, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./App.css";
import AsideNavigation from "./components/AsideNavigation/AsideNavigation";

function App() {
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
        <Content>main content</Content>
      </Layout>
    </Layout>
  );
}

export default App;
