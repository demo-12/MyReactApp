import React, { Component } from 'react'
import {BellFilled,DownOutlined,UserOutlined} from '@ant-design/icons'
import { Badge,Dropdown,Menu,Avatar } from 'antd';

import './index.css'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

export default class Header2 extends Component {
    
    render() {
        return (
            <div className='admin'>
                <header className='admin-header'>
                    <div>
                        <span className='title___3-WZj'>中科智兴网络货运平台</span>
                        <span className='version___1rwIg'>V2.0.0</span>
                        <span className='role___1-kq-'>后台管理系统</span>
                    </div>
                    <div className='header-right'>
                        <span>
                        <Badge count={10}>
                            <BellFilled style={{fontSize:'16px'}}/>                        
                        </Badge>
                        </span>
                        <span>|</span>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                超级管理员 <DownOutlined />
                            </span>
                        </Dropdown>
                        
                        <span><Avatar size={50} icon={<UserOutlined />} /></span>
                    </div>
                </header>
            </div>
        )
    }
}
