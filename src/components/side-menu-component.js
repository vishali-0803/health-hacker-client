import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, ProfileOutlined,SettingOutlined} from '@ant-design/icons';
const { Sider } = Layout;

const SideMenu = (props) => {
  return(
    <Sider
          trigger={null}
          collapsible
          collapsed={props.collapsed}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={()=>props.onMenuSelect("home")}>
            <HomeOutlined />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={()=>props.onMenuSelect("record")}>
            <ProfileOutlined />
              <span>Records</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={()=>props.onMenuSelect("bmi")}>
            <SettingOutlined />
              <span>BMI Info</span>
            </Menu.Item>
          </Menu>
        </Sider>
  )
}

export default SideMenu;
