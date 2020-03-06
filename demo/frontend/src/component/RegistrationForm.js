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
                            <Col span={24}>
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
                        </Row>    
                        
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
                                
                                
                                
                                    <Card title="Address Details" extra={<a href="#">More</a>} style={{ width: 600 }}>
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
                                
                                    <Card title="Property Details" extra={<a href="#">More</a>} style={{ width: 500 }}>
                                        <Form.Item label="No Of Rooms: " style={{marginLeft : '15px'}}> 
                                            <Field className="input" name="no_of_rooms" component="input" type="number" placeholder="No Of Rooms"/>
                                        </Form.Item>
                    
                                        <Form.Item label="Floor No : ">
                                            
                                            <Field className="input" name="floor_no" component="input" type="number" placeholder="Floor No"/>
                                        </Form.Item>
                    
                                        <Form.Item label="Total Floor Size : ">
                                            
                                            <Field className="input" name="total_floor_size" component="input" type="number" placeholder="Total Floor Size"/>
                                        </Form.Item>
                    
                                        <Form.Item label="Rent : ">
                                            
                                            <Field className="input" name="rent" component="input" type="number" placeholder="Rent"/>
                                        </Form.Item>
                        
                                        <Form.Item label="Deposite">
                                            
                                            <Field className="input" name="deposite" component="input" type="text" placeholder="deposite"/>
                                        </Form.Item>
                                        <Form.Item wrapperCol={{ span: 12, offset: 9 }}>
                                            <Avtar />
                                        </Form.Item>
                                    </Card>
                               
                                    
                                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                                        <Button type="primary" htmlType="submit"
                                        >
                                            Submit
                                        </Button>
                                    </Form.Item>
                                   
                                
                            </Form>
                            
                            
                           
                    </Content>
                    <Footer>
                        It is a Registration page please Give your above mention details to rent a house. 
                    </Footer>
                </Layout>

            </div>
        );
    };

RegistrationForm = reduxForm({
    form : 'registration'
})(RegistrationForm);
