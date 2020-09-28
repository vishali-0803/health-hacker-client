import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined} from '@ant-design/icons';
import { createHashHistory } from 'history';
import SideMenu from './side-menu-component';
import FitnessMain from './fitness-main-component'

const { Header, Content } = Layout;
const history = createHashHistory();
function HomePageComponent(props) {

  const[collapsed,setCollapsed] = useState(false);
  const[menu,setMenu] = useState("home");

  function toggle() {
    setCollapsed(!collapsed);
  }
  function changeMenu(id){
    setMenu(id);
  }

    return (
      <Layout>
       <SideMenu collapsed={collapsed} history={history} onMenuSelect={changeMenu}/>
        <Layout>
          <Header style={{ background: '#001529', padding: 0 }}>
          <Button type="primary" ghost style={{marginLeft : 8}} onClick={toggle}>
            <MenuOutlined />
          </Button>
          <span style={{marginLeft : 16}}>
            <label style={{color : "aliceblue", fontSize: "xx-large"}}>Health Hacker App</label></span>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#001529', minHeight: 280 }}>
            <FitnessMain menu={menu} history={props.history} onMenuSelect={changeMenu}/>
          </Content>
        </Layout>
      </Layout>
    );
}

export default HomePageComponent;