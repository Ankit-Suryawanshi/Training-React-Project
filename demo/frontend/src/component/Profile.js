import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import {NavLink } from 'react-router-dom';
import Update from './Update';
import { Form, Card, Button, Icon, Layout, Row, Col, Avatar, Carousel} from 'antd';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
const { Header, Footer, Content } = Layout;

export default class Profile extends Component {
    state = {
        profile_data : '', 
    }

    submitData = (event)=> {
        event.preventDefault();
        const  token = localStorage.getItem('token')
       // console.log(use.token)
        axios.get(`http://localhost:8000/api/showdata/${token}`)
        .then(res=>{console.log(res);console.log(res.data)
			this.setState({profile_data : res.data.data})
			alert('The profile data is!!');
			console.log(this.state.profile_data);
			console.log(this.state.profile_data.first_name);
			console.log(this.state.profile_data.last_name);
			console.log(this.state.profile_data.email);
			console.log(this.state.profile_data.contact);
			console.log(this.state.profile_data.address);
        })
        .catch(function(err){
			alert('LogIn to show Profile!!');
            console.log(err);
        });
    }

    logOut = (event)=>{
		console.log('Log out');
		localStorage.removeItem('token');
		//console.log(localStorage.getItem('token'));
		//console.log(this.state.redirect);
		alert('Logged out of the session!!')
		this.setState({ redirect : true});
		console.log(this.state.redirect);
    }
	
	delete = (event)=> {
		const  token = localStorage.getItem('token')
		axios.delete(`http://localhost:8000/api/deletedata/${token}`)
		.then(res=>{console.log(res);
			alert(res.data.message);
			console.log(res.data)
			localStorage.removeItem('token');
			this.props.history.push('/');
        })
        .catch(function(err){
            console.log(err);
        });

	}
	
	update = (event) => {
		this.props.history.push('/update');
	}

  	render() {
		return (
			<div>
				<div>
					<Layout>
						<Header >
							<div>
								<Row>
									<Col span={3}>
										<NavLink to="/" exact activeStyle={  
											{color:'red'}  
										}> 
											<Avatar>HOME</Avatar>
											HOME	
										</NavLink> 
									</Col>
									<Col span={3}>
										<NavLink to="/profile" exact activeStyle={  
											{color:'yellow'}  
										}> 
											<Avatar>PROFILE</Avatar>
											PROFILE	
										</NavLink> 
									</Col>
									<Col span={3}></Col>

									<Col span={3}>
										<Button type="primary" 
											htmlType="submit" 
											className="login-form-button"
											onClick={this.delete}
										>
											Delete Profile
										</Button>
									</Col>
									<Col span={1}> </Col>
									<Col span={3}>
										<Button type="primary" 
											htmlType="submit" 
											className="login-form-button"
											onClick={this.update}
										>
											Update Profile
										</Button>
									</Col>
									<Col span={1}> </Col>
						
									<Col span={3}>
										<Button type="primary" 
											htmlType="submit" 
											className="login-form-button"
											onClick={this.logOut}
										>
											LogOut
										</Button>
									</Col>
									<Col span={1}> </Col>
									<Col span={3}>
										<Button type="primary" 
											htmlType="submit" 
											className="login-form-button"
											onClick={this.submitData}
										>
											Show Profile
										</Button>
									</Col>
								</Row>
							</div>
						</Header>
					</Layout>
				</div>
			<Form  className="login-form">

				<div>
					<Card title="PROFILE DATA" style={{ width: 300 }}>
						<p>{this.state.profile_data.first_name}</p>
						<p>{this.state.profile_data.last_name}</p>
						<p>{this.state.profile_data.email}</p>
						<p>{this.state.profile_data.contact}</p>
						<p>{this.state.profile_data.address}</p>
					</Card>
				</div>
			</Form>
		</div>
		);
	}
}