import React, { Component } from 'react'
import { Layout } from 'antd';
import {Redirect,Route, Switch} from 'react-router-dom'
import EnterpriseNews from '../../pages/enterpriseNews/enterpriseNews';
import IndustryNews from '../../pages/industryNews/industryNews';
import WisdomValor from '../../pages/wisdomValor/wisdomValor';
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
                    <Content style={{backgroundColor:'white'}}>
                        <Switch>
                            <Route path='/enterpriseNews' component={EnterpriseNews}/>
                            <Route path='/industryNews' component={IndustryNews}/>
                            <Route path='/wisdomValor' component={WisdomValor}/>
                            <Redirect to='/enterpriseNews'/>
                        </Switch>
                    </Content>
                    
                </Layout>
                
            </Layout>
        )
    }
}
