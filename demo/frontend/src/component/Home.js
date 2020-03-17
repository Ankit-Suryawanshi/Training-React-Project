import React from 'react';  
import {NavLink } from 'react-router-dom';
import Texty from 'rc-texty';
import { LogInForm} from './SignInForm'
import { SignInForm} from './SignInForm'
import  {handleLogIn}  from './Login.js'
import axios from 'axios'
import 'rc-texty/assets/index.css';
import Login from './Login.js'
import { Layout,Carousel, Avatar, Row, Col, Card, Button, Modal} from 'antd';
import { formValueSelector } from 'redux-form';
const { Header, Content, Footer } = Layout;


export default class Home extends React.Component {

	state = { visible1: false, visible2 :false };

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

	showModal2 = () => {
		this.setState({
		visible2: true,
		});
	};

	handleOk2 = e => {
		console.log(e);
		this.setState({
		visible2: false,
		});
	};

	handleCancel2 = e => {
		console.log(e);
		this.setState({
		visible2: false,
		});
	};

	handleLogIn = (user)=> {
        axios.post('http://localhost:8000/api/login',{user})
		.then(res=>{console.log(res);
			alert(res.data.message);
			console.log(res.data.message)
          	localStorage.setItem('token',res.data.token);
			console.log(localStorage.getItem('token'));
			if (res.data.user.role === 'Landlords') {
				console.log(res.data.user.role);
				this.props.history.push('/profile');
			}
			else {
				console.log(res.data.user.role)
				this.props.history.push('/dashbord')
			}
		
        })
        .catch(function(err){
        	console.log(err);
        });
    }

	handleSignIn = user => {
		console.log(user);
		console.log(localStorage.getItem('image'));
		user = {...user,image : localStorage.getItem('image')};
		localStorage.removeItem('image');
		axios.post('http://localhost:8000/api/signup',{user})
		  .then(res=>{console.log(res);
			alert(res.data.message);  
			console.log(res.data);
		  })
		  .catch(function(err){
			  console.log(err);
		  });
	};

	render() {
	return (    
    <div>
		<Layout>
      		<Header >
				<div>
					<Row>
						<Col span={8} style={{color : 'white'}}>
							<Texty style={{fontSize : '20px'}}>The best place for Landlords and Tenants</Texty> 
						</Col>
						<Col span={9}></Col>
						<Col span={3}>
							<div>
								<Button block onClick={this.showModal1}>
									LOGIN
								</Button>
								<Modal
								title="Login Here..."
								visible={this.state.visible1}
								onOk={this.handleOk1}
								onCancel={this.handleCancel1}
								okButtonProps={{ disabled: true }}
								>
									<LogInForm onSubmit={this.handleLogIn} />
								</Modal>
							</div>
						</Col>
						<Col span={2}></Col>
						<Col span={2}>
							<div>
								<Button type="primary" onClick={this.showModal2}>
									SIGNUP
								</Button>
								<Modal
								title="Signup Here..."
								visible={this.state.visible2}
								onOk={this.handleOk2}
								onCancel={this.handleCancel2}
								okButtonProps={{ disabled: true }}
								>
									<SignInForm onSubmit={this.handleSignIn} />
								</Modal>
							</div>
						</Col>
					</Row>
				</div>
			</Header>
      		<Content style={{padding : '2px'}}>
				<Carousel >
					<div>
						<img alt="Image loading..." src="https://www.londonnest.com/content/uploads/2017/03/curve-aldgate-east.jpg"
							style={{ width : '1000' , height : '300' ,objectFit : 'cover'}}
						/>
					</div>
				</Carousel>
				<Row>
					<Col span={12} style={{textAlign : 'center'}}>
						<h2>Want to earn money.</h2>
						<br/><h4>
						Rent your Aprtments, Villas, Cabins, Holiday homes, Guest houses.
						<br/>
						By Advertising Here. Find the best Tenants.
						<br/>
						On the most trusted site.</h4> 	
					</Col>
					<Col span={12} style={{textAlign : 'center'}}>
						<h2>Want to save money.</h2>
						<br/><h4>
						Find best Aprtments, Villas, Cabins, Holiday homes, Guest houses.
						<br/>
						By Searching Here. Find the best Landlords.
						<br/>
						On the most trusted site.</h4>
					</Col>
				</Row>
				<h1>Property Types</h1>
				<Row>
					
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/card-image-villas_300.jpg" />}
						>
							<Card.Meta title="Villas" description="Private self-standing and self-catering home with luxury feel 432,732 villas" />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/card-image-apartments_300.jpg" />}
						>
							<Card.Meta title="Apartments" description="Furnished and self-catering accommodation available for short- and long-term rental 831,305 apartments" />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/card-image-chalet_300.jpg" />}
						>
							<Card.Meta title="Cabins" description="Free-standing home characterised by sloped roof and rented specifically for holidays 14,374 cabins" />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/card-image-holidayhomes_300.jpg" />}
						>
							<Card.Meta title="Holiday homes" description="Free-standing home with private, external entrance and rented specifically for holidays 432,732 holiday homes" />
						</Card>
					</Col>
				</Row>
				<Row>
					
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/bg_guest_house.jpg" />}
						>
							<Card.Meta title="Guest houses" description="Private home with separate living facilities for host and guest 134,868 guest houses" />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/bg_bed_and_breakfast.jpg" />}
						>
							<Card.Meta title="B&Bs" description="Private home offering overnight stays and breakfast 241,794 B&Bs" />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/card-image-chalet_300.jpg" />}
						>
							<Card.Meta title="Ryokans" description="Traditional Japanese-style accommodation with meal options 2,384 ryokans" />
						</Card>
					</Col>
					<Col span={6}>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt="example" src="https://q.bstatic.com/static/img/theme-index/bg_riad.jpg" />}
						>
							<Card.Meta title="Riads" description="Traditional Moroccan accommodation with a courtyard and luxury feel 1,317 riads" />
						</Card>
					</Col>
				</Row>
				<h1>FAQs</h1>
				<Row style={{textAlign : 'center'}}>
					<Col span={11}>
						<h2>What happens if my property is damaged by a guest?</h2>
						Property owners can request damage deposits from guests. Deposits can help cover any potential damage that a guest might cause, providing assurance that your property will be treated respectfully. If anything does go wrong, it can be reported to our team through our misconduct reporting feature.
					</Col>
					<Col span={2}></Col>
					<Col span={11}>
						<h2>What will happen after I sign up?</h2>
						After you’ve registered your property, we will review your information to make sure we have everything we need. You’ll then receive an email with login details for your Extranet. This is where you’ll go to update your availability and prices. After that you’ll receive instructions on how to set your property live on Booking.com!
					</Col>
				</Row>
			</Content>
			<Footer>
				<Row>
					<Col style={{backgroundColor:"gray", textAlign : 'center', color:'Black'}}>
							PLEASE SIGNUP T0 CONTINUE..... 
					</Col>
				</Row>
			</Footer>
    	</Layout>
		
    </div>   
);

}}
  