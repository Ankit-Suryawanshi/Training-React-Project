import React, { Component } from 'react'
import { Layout,Carousel, Avatar, Row, Col, Card, Button, Modal} from 'antd';
import Texty from 'rc-texty';
import axios from 'axios';
import ListData from './ListData';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../index.css'
const { Header, Content, Footer } = Layout;

const mapStyles = {
	//width: '100%',
    //height: '100%'
    objectFit : 'cover' 
  };

export class Dashbord extends React.Component { 

    state ={
        propertyData : []
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

    componentDidMount() {
        axios.get(`http://localhost:8000/api/propertydata`)
        .then(res=>{
            //console.log(res);
            //console.log(res.data.data[0]._id)
            this.setState({propertyData : res.data.data})
            //console.log(this.state.propertyData);
            //console.log(this.state.propertyData._id)
        })
        .catch(function(err){
			//alert('LogIn to show Data!!');
            //console.log(err);
        });
  
    }


    render() {
        return (
            <div>
                <Layout>
                    <Header >
                        <div style={{margin:'0px', padding:'0px'}}>
                            <Row>
                                <Col span={8} style={{color : 'white'}}>
                                    <Texty style={{fontSize : '20px'}}>The best place for Landlords and Tenants</Texty> 
                                </Col>
                                <Col span={14}></Col>
                                
                                <Col span={2}>
                                    <div>
                                        <Button block type="primary" onClick={this.logOut}>
                                            LOGOUT
                                        </Button>
                        
                                    </div>
                                </Col>
                            </Row>
                            

                            <div className="row">
                                <div className="column column1" >
                                    {this.state.propertyData.map((data)=>(
                                        <ListData key={data._id} value={data}/>
                                    ))}
                                </div>
                                <div className="column column2" >
                                        <Map
                                            google={this.props.google}
                                            zoom={14}
                                            style={mapStyles}
                                            initialCenter={{
                                            lat: -1.2884,
                                            lng: 36.8233
                                            }}
                                        />
                                </div>
                            </div>


                                {/*<Col span={10}>
                                    {this.state.propertyData.map((data)=>(
                                        <ListData key={data._id} value={data}/>
                                    ))}
                                </Col>
                        
                                    <div style={{display:'inline' , float : 'right', marginRight : '60%'}}>
                                        <Map
                                            google={this.props.google}
                                            zoom={14}
                                            style={mapStyles}
                                            initialCenter={{
                                            lat: -1.2884,
                                            lng: 36.8233
                                            }}
                                        />
                                        </div>*/}

                                
                            
                        </div>
                    </Header>
                </Layout>
            </div>
        );
    }
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCIV6PpSP21L6m6kqA3e9sDk4_Mt-r9Gy4'
  })(Dashbord);
