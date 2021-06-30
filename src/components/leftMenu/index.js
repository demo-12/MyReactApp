import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import { Menu } from 'antd';

import {
    
    UserOutlined, 
    LaptopOutlined, 
    NotificationOutlined
  } from '@ant-design/icons';
  


const { SubMenu } = Menu;
class LeftMenu extends Component {
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
      render() {
        const path = this.props.location.pathname
        return (
          <div style={{ width: 200 }}>
            <Menu  
              mode="inline"
              defaultSelectedKeys={[path]}
              defaultOpenKeys={['sub1']}
              style={{backgroundColor: '#061a38',height: '100%', borderRight: 0,fontWeight:'bold',color:'white'}}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1" >
                
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9"><Link to='/enterpriseNews'>门户网站</Link></Menu.Item>
                <Menu.Item key="10"><Link to='/industryNews'>行业新闻</Link></Menu.Item>
                <Menu.Item key="11"><Link to='/wisdomValor'>招贤纳士</Link></Menu.Item>
                
              </SubMenu>
            </Menu>
            

          </div>
        )
    }
}

export default withRouter(LeftMenu)
