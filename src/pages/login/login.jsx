import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import './login.css'
import logo from './images/logo512.png'


export default class Login extends Component {
    
    render() {
        
        
        return (
            <div className='login'>
                <header className='login-header'>
                   <img src={logo} alt='logo'/>
                   <h1>中科智兴网络货运平台</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        
                        >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                            Submit
                            </Button>
                        </Form.Item>
                        </Form>
                        
                </section>
            </div>
        )
    }
}
