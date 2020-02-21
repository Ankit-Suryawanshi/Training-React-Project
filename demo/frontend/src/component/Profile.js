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
        email : '' 
    }

    /*handleChange = (event)=> {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name] : value});
    }*/

    submitData = (event)=> {
        event.preventDefault();
        const user = {
            token: localStorage.getItem('token')
        }
        console.log(user.token)
        axios.get('http://localhost:8000/api/showdata',{user})
        .then(res=>{console.log(res);console.log(res.data)
        })
        .catch(function(err){
            console.log(err);
        });
    }
     
    

  render() {

    return (
      <div className="login-div">
        <Form  className="login-form">
            <Form.Item>
            <Button type="primary" 
            htmlType="submit" 
            className="login-form-button"
            onClick={this.submitData}
            >
                Show Profile
            </Button>
            </Form.Item>
            
        </Form>
      </div>
    );
  }
}