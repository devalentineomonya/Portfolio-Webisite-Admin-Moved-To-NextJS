import "./App.css";
import { Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import AsideNavigation from "./components/AsideNavigation/AsideNavigation";
import Dashboard from "./pages/Dashboard/Dashboard";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  return (
    <Layout className="main-layout">
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
