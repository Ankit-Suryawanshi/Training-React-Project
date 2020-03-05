import React, { Component } from 'react'
import '../index.css'
import {NavLink } from 'react-router-dom';
import { Form, Button, Icon, Layout, Row, Col, Avatar, Carousel, Card} from 'antd';
import {reduxForm, Field} from 'redux-form';
import Avtar from './Avtar';
const { Header, Footer, Content } = Layout;

export function RegistrationForm(props)  {
    const { handleSubmit } = props;

        return ( 
            <div>
                <Layout>
                    <Header >
                        <div>
                            <Row>
                                <Col span={3}>
                                    <NavLink to="/" exact activeStyle={  
                                        {color:'green'}  
                                    }> 
                                        <Avatar>HOME</Avatar>
                                        HOME	
                                    </NavLink> 
                                </Col>
                                <Col span={3}>
                                    <NavLink to="/login" exact activeStyle={  
                                        {color:'green'}  
                                    }> 
                                        <Avatar>LOGIN</Avatar>
                                        LOGIN	
                                    </NavLink> 
                                </Col>
                                <Col span={3}>
                                    <NavLink to="/signup1"  activeStyle={  
                                        {color:'magenta'}  
                                    }>	
                                        <Avatar>SIGNUP</Avatar>
                                        SIGNUP  
                                    </NavLink>
                                </Col>
                            </Row>
                        </div>
                    </Header>
                    <Content style={{padding : '2px'}}>
                        <Row>
                            <Col span={12}>
                                <Carousel autoplay>
                                    <div>
                                        <img alt="Image loading..." src="https://gw.alipayobjects.com/zos/rmsportal/UUYEwxEZfKjrarbCDBBf.jpg" 
                                            style={{height : '200%', width : '100%'}}
                                        />
                                    </div>
                                    <div>
                                        <img alt="Image loading..." src="https://gw.alipayobjects.com/zos/rmsportal/rdDIHRctzBPCgOiKAKDG.jpg" 
                                            style={{height : '20%', width : '100%'}}
                                        />
                                    </div>
                                    <div>
                                    <h3>
                                        <img alt="Image loading..." src="https://gw.alipayobjects.com/zos/rmsportal/dqHtpdbLPSTUHVYZBUGV.jpg"
                                            style={{height : '20%', width : '100%'}}
                                        />
                                    </h3>
                                    </div>
                                    <div>
                                        <img alt="Image loading..." src="https://gw.alipayobjects.com/zos/rmsportal/bVmfUDTcAYoDtGpRwbRH.jpg"
                                            style={{height : '20%', width : '100%'}}
                                        />
                                    </div>
                                    <div>
                                        <img alt="Image loading..." src="https://gw.alipayobjects.com/zos/rmsportal/xMreRRJlTOZjLBetFzLN.jpg"
                                            style={{height : '100%', width : '100%'}}
                                        />
                                    </div>
				                </Carousel>  
                            </Col>
                            <Col span={12} style={{padding : '10px'}}>
                                <div>
                                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
                                        <Form.Item wrapperCol={{ span: 12, offset: 9 }}>
                                            <Avtar />
                                        </Form.Item>
                                        <Card title="Address" extra={<a href="#">More</a>} style={{ width: 500 }}>
                                            <Form.Item label="Street : "> 
                                                <Field className="input" name="street" component="input" type="text" placeholder="Street"/>
                                            </Form.Item>
                                            <Form.Item label="Area : "> 
                                                <Field className="input" name="area" component="input" type="text" placeholder="Area Name"/>
                                            </Form.Item>
                                            <Form.Item label="City : "> 
                                                <Field className="input" name="city" component="input" type="text" placeholder="City Name"/>
                                            </Form.Item>
                                            <Form.Item label="Pincode : "> 
                                                <Field className="input" name="pincode" component="input" type="number" placeholder="Pincode"/>
                                            </Form.Item>
                                            <Form.Item label="state : "> 
                                                <Field className="input" name="state" component="input" type="text" placeholder="State Name"/>
                                            </Form.Item>
                                            <Form.Item label="First-Name : "> 
                                                <Field className="input" name="first_name" component="input" type="text" placeholder="First Name"/>
                                            </Form.Item>
                                            <Form.Item label="Country : "> 
                                                <Field className="input" name="country" component="input" type="text" placeholder="Country Name"/>
                                            </Form.Item>
                                        </Card>


                                        <Form.Item label="First-Name : "> 
                                            <Field className="input" name="first_name" component="input" type="text" placeholder="First Name"/>
                                        </Form.Item>
                    
                                        <Form.Item label="Last-Name : ">
                                            
                                            <Field className="input" name="last_name" component="input" type="text" placeholder="Last Name"/>
                                        </Form.Item>
                    
                                        <Form.Item label="Email : ">
                                            
                                            <Field className="input" name="email" component="input" type="email" placeholder="Email"/>
                                        </Form.Item>
                    
                                        <Form.Item label="Contact : ">
                                            
                                            <Field className="input" name="contact" component="input" type="number" placeholder="Contact"/>
                                        </Form.Item>
                        
                                        <Form.Item label="Address">
                                            
                                            <Field className="input" name="address" component="input" type="text" placeholder="Address"/>
                                        </Form.Item>
                        
                                        <Form.Item label="Password">
                                           
                                            <Field className="input" name="password" component="input" type="password" placeholder="Password"/>
                                        </Form.Item>
 
                                        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                            <Button type="primary" htmlType="submit"
                                            >
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                                 
                            </Col>
                        </Row>
                    </Content>
                    <Footer>
                        It is a signIn page please Give your above mention details to create an account or login if already have a account. 
                    </Footer>
                </Layout>

            </div>
        );
    };

RegistrationForm = reduxForm({
    form : 'registration'
})(RegistrationForm);
