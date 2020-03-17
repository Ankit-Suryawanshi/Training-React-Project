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
                            <h1 style={{color : 'white'}}>
                                Enter the Correct details of your Property
                            </h1>
                        </div>
                    </Header>
                    <Content style={{padding : '2px'}}>
                        
                            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
                                
                                <Row>
                                  <Col span={12}>
                                    <Card title="Address Details" extra={<a href="#"></a>} style={{ width: 600 }}>
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
                                  </Col>
                                  <Col span={12}>
                                    <Card title="Property Details" extra={<a href="#"></a>} style={{ width: 600 }}>
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
                                  </Col>
                                </Row>
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
