import React, { Component } from 'react';
import { Form, Select, Input, Button, } from 'antd';
import axios from 'axios';
import '../index.css'
import Title from 'antd/lib/skeleton/Title';
const { Option } = Select;
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

export default class Signup extends Component {
    state = {
        firstname : '',
        lastname : '',
        email : '',
        contact : '',
        address : '',
        password : ''
    }

    handleChange = (event)=> {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name] : value});
    }

    submitData = (event)=> {
        event.preventDefault();
        const user = {
            first_name : this.state.firstname,
            last_name : this.state.lastname,
            email : this.state.email,
            contact : this.state.contact,
            address : this.state.address,
            password : this.state.password
        }
        //console.log(this.state)
        axios.post('http://localhost:8000/api/signup',{user})
        .then(res=>{console.log(res);console.log(res.data)})
        .catch(function(err){
            console.log(err);
        });
        

    }


  render() {

    return (
        <div className="signup-div">
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
                
                <Form.Item label="First-Name : ">
                <Input type='text' name='firstname' 
                value={this.state.firstname} onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item label="Last-Name : ">
                <Input type='text' name='lastname'
                value={this.state.lastname} onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item label="Email : ">
                <Input type='text' name='email'
                value={this.state.email} onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item label="Contact : ">
                <Input type='number' name='contact' 
                value={this.state.contact} onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item label="Address">
                <Input type='text' name='address'
                value={this.state.address} onChange={this.handleChange}/>
                </Form.Item>

                <Form.Item label="Password">
                <Input type='password' name='password'
                value={this.state.password} onChange={this.handleChange}/>
                </Form.Item>
                
                <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
                <Button type="primary" htmlType="submit"
                onClick={this.submitData}>
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    );
  }
}