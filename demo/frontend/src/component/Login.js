import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import {  Form, Icon, Input, Button, Select } from 'antd';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';

const cookies = new Cookies();
const { Option } = Select;
const ls =localStorage.getItem('token');
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default class Login extends Component {
    state = {
        email : '',
        password : '',
        userid : '',
        redirect : false
    }

    handleChange = (event)=> {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name] : value});
    }

    submitData = (event)=> {
        event.preventDefault();
        const user = {
            email : this.state.email,
            password : this.state.password
        }
        //console.log(this.state)
        axios.post('http://localhost:8000/api/login',{user})
        .then(res=>{console.log(res);console.log(res.data.message)
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('email',res.data.user.email);
          console.log(localStorage.getItem('token'));
          console.log(localStorage.getItem('email'));
          this.setState({ redirect : true});
        })
        .catch(function(err){
            console.log(err);
        });
    }
     
    

  render() {
    
    if(this.state.redirect) {
      return <Redirect to='/profile' />
    }

    return (
      <div className="login-div">
        <Form  className="login-form">
        <Form.Item>
          
            <Input
              type="text"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              name='email'
              onChange={this.handleChange}
              value={this.state.email}
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name='password'
              onChange={this.handleChange}
              value={this.state.password}
            />
        </Form.Item>
        <Form.Item>
          <Button type="primary" 
          htmlType="submit" 
          className="login-form-button"
          onClick={this.submitData}
          >
            Log in
          </Button>
          Or <a href="./Signup">register now!</a>
        </Form.Item>
      </Form>
      </div>
    );
  }
}
