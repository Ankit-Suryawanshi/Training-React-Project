import React from 'react';  
import {NavLink } from 'react-router-dom';
import { Layout,Carousel, Avatar, Row, Col } from 'antd';
const { Header, Content } = Layout;

export const home = (    
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
				<Carousel autoplay>
					<div>
						<img alt="Image loading..." src="https://gw.alipayobjects.com/zos/rmsportal/UUYEwxEZfKjrarbCDBBf.jpg" 
							style={{height : '20%', width : '100%'}}
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
							style={{height : '20%', width : '100%'}}
						/>
					</div>
				</Carousel>
			</Content>
    	</Layout>
    </div>   
);


  