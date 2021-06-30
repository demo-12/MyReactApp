import React, { Component } from 'react'
import { Tabs, Button, Modal,Row, Col,DatePicker, Space, Pagination, Table  } from 'antd';
import { Link } from 'react-router-dom';
import './enterpriseNews.css'


const { TabPane } = Tabs;
const { RangePicker } = DatePicker;



export default class EnterpriseNews extends Component {
    state = {
        modal1Visible: false,
        modal2Visible: false,
    };


    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
    }
      
    render() {
        
        const columns = [
            {
              title: '创建时间',
              dataIndex: 'creattime',
              key: 'name',
              
            },
            {
              title: '状态',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '企业动态标题',
              dataIndex: 'address',
              key: 'address',
            },
            {
                title: '企业动态日期',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '上架时间',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '功能',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                    <Link>Invite {record.creattime}</Link>
                    <Link>Delete</Link>
                    </Space>
                ),
                },
            ];

            const data = [
                {
                  key: '1',
                  creattime: '2021-09-08',
                  age: '上架中',
                  address: 'New York No. 1 Lake Park',
                  
                },
                {
                  key: '2',
                  creattime: 'Jim Green',
                  age: '上架中',
                  address: 'London No. 1 Lake Park',
                  
                },
                {
                  key: '3',
                  creattime: 'Joe Black',
                  age: '上架中',
                  address: 'Sidney No. 1 Lake Park',
                  
                },
              ];
        
        const operations = <Button type="primary" onClick={() => this.setModal1Visible(true)}>新增动态</Button>
        
        return (
            <div>
                <div className='select'>
                    <div className='largetitle___2sQMG'>企业动态</div>
                    <Tabs style={{padding:'12px 16px'}} tabBarExtraContent={operations}>
                        <TabPane tab="上架中" key="2">
                            <Row>
                                <Col span={6}>
                                    <div className='datetime'>
                                        <span>创建日期</span>
                                        <div>
                                            <Space style={{width:'200px'}} direction="vertical" size={'small'}>
                                                <RangePicker />
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className='datetime'>
                                        <span>企业动态日期</span>
                                        <div>
                                            <Space style={{width:'200px'}} direction="vertical" size={'small'}>
                                                <RangePicker />
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className='datetime'>
                                        <span>上架日期</span>
                                        <div>
                                            <Space style={{width:'200px',padding:'4 11px',lineHeight:'40px'}} direction="vertical" size={'small'}>
                                                <RangePicker />
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6} style={{display:'flex',justifyContent:'flex-end'}}> 
                                    <Button type="primary">搜索</Button>
                                    <div style={{height:'20px',width:'20px'}}></div>
                                    <Button type="primary">重置</Button>
                                </Col>
                            </Row>
                            <div className='content'>
                                <div style={{width:'100%',padding:' 0 15px 15px 0'}}></div>
                                <div className='list' style={{display:'flex',justifyContent:'flex-end'}}>
                                    <div>
                                        <Pagination simple defaultCurrent={1} total={50} style={{display: 'flex', justifyContent: 'flex-end', padding: '20px'}}/>
                                    </div>
                                    <div className='page'>总共<span>&nbsp;&nbsp;3&nbsp;&nbsp;</span>条，每页&nbsp;&nbsp;10&nbsp;&nbsp;条记录</div>
                                </div>
                                <Table columns={columns} dataSource={data} />
                            </div>  
                        </TabPane>
                        <TabPane tab="下架中" key="3">
                            <Row>
                                <Col span={6}>
                                    <div className='datetime'>
                                        <span>创建日期</span>
                                        <div>
                                            <Space style={{width:'200px'}} direction="vertical" size={'small'}>
                                                <RangePicker />
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className='datetime'>
                                        <span>企业动态日期</span>
                                        <div>
                                            <Space style={{width:'200px'}} direction="vertical" size={'small'}>
                                                <RangePicker />
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className='datetime'>
                                        <span>上架日期</span>
                                        <div>
                                            <Space style={{width:'200px',padding:'4 11px',lineHeight:'40px'}} direction="vertical" size={'small'}>
                                                <RangePicker />
                                            </Space>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={6} style={{display:'flex',justifyContent:'flex-end'}}> 
                                    <Button type="primary">搜索</Button>
                                    <div style={{height:'20px',width:'20px'}}></div>
                                    <Button type="primary">重置</Button>
                                </Col>
                            </Row>
                            <div className='content'>
                                <div style={{width:'100%',padding:' 0 15px 15px 0'}}></div>
                                <div className='list' style={{display:'flex',justifyContent:'flex-end'}}>
                                    <div>
                                        <Pagination simple defaultCurrent={1} total={50} style={{display: 'flex', justifyContent: 'flex-end', padding: '20px'}}/>
                                    </div>
                                    <div className='page'>总共<span>&nbsp;&nbsp;3&nbsp;&nbsp;</span>条，每页&nbsp;&nbsp;10&nbsp;&nbsp;条记录</div>
                                </div>
                                <Table columns={columns} dataSource={data} />
                            </div>
                        </TabPane>
                            </Tabs>
                                <br />
                                <br />
                                <br />
                            
                            <Modal
                                title="20px to Top"
                                style={{ top: 20 }}
                                visible={this.state.modal1Visible}
                                onOk={() => this.setModal1Visible(false)}
                                onCancel={() => this.setModal1Visible(false)}
                                >
                                <p>some contents...</p>
                                <p>some contents...</p>
                                <p>some contents...</p>
                            </Modal>
                        </div>
                      
            </div>

        )
    }
}
