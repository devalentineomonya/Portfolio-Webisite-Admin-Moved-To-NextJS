import "./App.css";
import { Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import AsideNavigation from "./components/AsideNavigation/AsideNavigation";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import RouterConfig from "./route";
import AddUser from "./components/UsersForms/AddUser";
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
         <RouterConfig/>
        </Content>
        
      </Layout>
    </Layout>
  );
}

export default App;
