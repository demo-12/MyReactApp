import React, { Component } from 'react'
import { Layout } from 'antd';
import LeftMenu from '../../components/leftMenu';
import Header2 from '../../components/Header';
const { Header, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        return (
            <Layout style={{height:'100%'}}>
                <Header style={{padding:'0',height:'80px'}}><Header2/></Header>
                <Layout>
                    <Sider><LeftMenu/></Sider>
                    <Content>Content</Content>
                    
                </Layout>
                
            </Layout>
        )
    }
}
