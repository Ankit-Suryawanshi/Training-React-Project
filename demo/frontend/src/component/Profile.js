import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css'
import {NavLink } from 'react-router-dom';
import Update from './Update';
import { Form, Card, Button, Icon, Layout, Row, Col, Avatar, Carousel, Modal, 	} from 'antd';
import { Redirect } from 'react-router-dom';
import { ExtraInfo } from './SignInForm'
import axios from 'axios';
import RegistrationForm from './Registration';
import NavBar from './NavBar.js'
const { Header, Footer, Content } = Layout;
const img = '/home/rails/Downloads/bestpeers.png';

export default class Profile extends Component {
    state = {
		profile_data : '', 
		visible1 : false,
    }

	showModal1 = () => {
		this.setState({
		visible1: true,
		});
	};

	handleOk1 = e => {
		console.log(e);
		this.setState({
		visible1: false,
		});
	};

	handleCancel1 = e => {
		console.log(e);
		this.setState({
		visible1: false,
		});
	};

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
			console.log(this.state.profile_data.image);
			
        })
        .catch(function(err){
			alert('LogIn to show Profile!!');
            console.log(err);
        });
    }

    logOut = (event)=>{
		console.log('Log out');
		localStorage.removeItem('token');
		localStorage.clear();
		//console.log(localStorage.getItem('token'));
		//console.log(this.state.redirect);
		alert('Logged out of the session!!')
		this.props.history.push('/');
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

	handleExtraInfo= info =>{
		info = {...info,token:localStorage.getItem('token')};
		axios.post("http://localhost:8000/api/moreinfo",{info})
			.then(res=>{
				console.log(res.data.message);
				console.log('Data is inserted')})
			.catch(function(err){
				console.log(err);
			})
	}

	
	update = (event) => {
		this.props.history.push('/update');
	}

	register = (event) => {
		this.props.history.push('/register');
	}

	multipleimage = (event) => {
		this.props.history.push('/multipleimage');
	}

  	render() {
		if(this.state.profile_data != '')
		{
			return (
				<div>
					<Card title="PROFILE DATA" style={{ width: 600, height :600  }}>
					<Avatar src={"data:image/jpeg;base64,"+this.state.profile_data.image} />
						<p>{this.state.profile_data.first_name}</p>
						<p>{this.state.profile_data.last_name}</p>
						<p>{this.state.profile_data.email}</p>
						<p>{this.state.profile_data.contact}</p>
						<p>{this.state.profile_data.address}</p>
					</Card>
					<img ng-src={"data:image/jpeg;base64,"+this.state.profile_data.image} />
				</div>
			)
		}
		return (
			<div>
				
				<div>
					<Layout>
						<Header >
							<div>
								
								<Row>
									<Col span={2}>
										<NavLink to="/" exact activeStyle={  
											{color:'red'}  
										}> 
											<Avatar>HOME</Avatar>
											HOME	
										</NavLink> 
									</Col>
									<Col span={2}>
										<NavLink to="/profile" exact activeStyle={  
											{color:'yellow'}  
										}> 
											<Avatar>PROFILE</Avatar>
											PROFILE	
										</NavLink> 
									</Col>
									<Col span={1}></Col>

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
									<Col span={1}></Col>
									<Col span={3}>
										<Button type="primary" 
											htmlType="submit" 
											className="login-form-button"
											onClick={this.register}
										>
											Registration
										</Button>
									</Col>
									<Col span={3}>
										<Button type="primary" 
											htmlType="submit" 
											className="login-form-button"
											onClick={this.multipleimage}
										>
											Image Upload
										</Button>
									</Col>
									<Col span={1}></Col>
									<Col span={3}>
										<Button type="primary" onClick={this.showModal1}>
											Extra Info..
										</Button>
										<Modal
										title={<h2>Add Extra Details of Your Property To Attract the Tenants</h2>}
										visible={this.state.visible1}
										onOk={this.handleOk1}
										onCancel={this.handleCancel1}
										okButtonProps={{ disabled: true }}
										>
											<ExtraInfo onSubmit={this.handleExtraInfo}/>
										</Modal>
									</Col>
								</Row>
							</div>
						</Header>
					</Layout>
				</div>
			<Form  className="login-form">

				
			</Form>
		</div>
		);
	}
}