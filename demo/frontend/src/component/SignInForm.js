import React from 'react';
import '../index.css'
import {NavLink } from 'react-router-dom';
import { Form, Button, Icon, Layout, Row, Col, Avatar, Carousel} from 'antd';
import {reduxForm, Field} from 'redux-form';
import Avtar from './Avtar';
import { UserOutlined } from '@ant-design/icons';
import MoreInfo from './MoreInfo';



const { Header, Footer, Content } = Layout;

export function SignInForm(props)  {
    const { handleSubmit } = props;

        return ( 
            <div>
                <Layout>
                  
                    <Content style={{padding : '2px'}}>
                        <Row>    
                            <Col span={24} style={{padding : '10px'}}>
                                <div>
                                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
                                        <Form.Item wrapperCol={{ span: 12, offset: 9 }}>
                                            <Avtar />
                                        </Form.Item>
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

                                        <Form.Item label="Role  ">
                                           
                                            <Field className="input" name="role" component="select" placeholder="Role">
                                                <option value=""  selected disabled>Select Role</option>
                                                <option value="Landlords">LandLords</option>
                                                <option value="Tenant">Tenant</option>
                                            </Field>
                                        </Form.Item>
 
                                        <Form.Item wrapperCol={{ span: 12, offset: 9 }}>
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

export  function LogInForm(props)  {
    const { handleSubmit } = props;
        return ( 
            <div>
                <Layout>
                    
                        <div>
                            <Row>
                                <Col span={10}></Col>
                                <Col span={4}>    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></Col>
                                <Col span={10}></Col>
                            </Row>
                        </div>
                    
                    <Content style={{padding : '2px'}}>
                        <Row>
                            
                                
                            <Col span={24} style={{padding : '10px'}}>
                                <div>
                                    <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
                                    
                                        <Form.Item label="Email : ">
                                            <Field className="input" name="email"
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                                component="input" type="email" placeholder="Email"/>
                                        </Form.Item>
                        
                                        <Form.Item label="Password">
                                            <Field  className="input" name="password"
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                component="input" type="password" placeholder="Password"/>
                                        </Form.Item>
                                        
                                        <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
                                            <Button type="primary" htmlType="submit"
                                                
                                            >
                                                Login
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                                 
                            </Col>
                        </Row>
                    </Content>
                    <Footer>
                        It is a LogIn page please Give your above mention details to Login or Signup First. 
                    </Footer>
                </Layout>
            </div>
      );
  };

export function ExtraInfo(props) {
    const {handleSubmit} = props;
    return (
        <div>
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={handleSubmit}>
                <Form.Item label="Add All Here : "> 
                    <Field className="input" name="more_info" component="textarea" 
                        type="text" placeholder="Add all genuine info only.."
                        rows="8" cols="15"
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
                    <Button type="primary" htmlType="submit"
                        
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

SignInForm = reduxForm({
    form: 'signIn' 
  })(SignInForm);

LogInForm = reduxForm({
    form: 'logIn'
  })(LogInForm);
  
ExtraInfo = reduxForm({
    form : 'multiInfo'
})(ExtraInfo);