import React, { Component } from 'react'
import { Avatar, Col,Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import axios from 'axios'

export default class MoreInfo extends Component {
    state ={
        proprtyData : '',
        address : ''
    }
    componentDidMount(){   
        const id = this.props.id;
        console.log(id);
        axios.get(`http://localhost:8000/api/moreinfoget/${id}`)
        .then(res=>{console.log(res);
            console.log('The data is :')
            console.log(res.data)
            this.setState({proprtyData : res.data.data})
            this.setState({address : res.data.data.address});
			//alert('The profile data is!!');
			console.log(this.state.proprtyData);
			console.log(this.state.proprtyData.rent);
			console.log(this.state.proprtyData.deposite);
			console.log(this.state.proprtyData.floor_no);
			console.log(this.state.proprtyData.total_floor_size);
			console.log(this.state.proprtyData.image);
		})
        .catch(function(err){
			alert('LogIn to show Profile!!');
            console.log(err);
        })
      
    }
    render() {
       
            return (
                <div>
                    <Row><Col span={10}></Col><Col span={4}>
                        <Avatar src={"data:image/jpeg;base64,"+this.state.proprtyData.image} shape="square" size={64} icon={<UserOutlined />}/>
                    </Col></Row>
                    <br/>
                    <Row>
                        <h2>Address :</h2>
                    </Row>

                    <Row><h3><Col span={8}>Street :</Col><Col span={8}>{this.state.address.street}</Col></h3></Row>
                    <Row><h3><Col span={8}>Area :</Col><Col span={8}>{this.state.address.area}</Col></h3></Row>
                    <Row><h3><Col span={8}>City :</Col><Col span={8}> {this.state.address.city}</Col></h3></Row>
                    <Row><h3><Col span={8}>Pincode :</Col><Col span={8}> {this.state.address.pincode}</Col></h3></Row>
                    <Row><h3><Col span={8}>State :</Col><Col span={8}> {this.state.address.state}</Col></h3></Row>
                    <Row><h3><Col span={8}>Country :</Col><Col span={8}> {this.state.address.country}</Col></h3></Row>
                    <Row><h3><Col span={8}>No. of Rooms :</Col><Col span={8}> {this.state.proprtyData.no_of_rooms}</Col></h3></Row>
                    <Row><h3><Col span={8}>Floor NO. :</Col><Col span={8}> {this.state.proprtyData.floor_no}</Col></h3></Row>
                    <Row><h3><Col span={8}>Total Floor Size :</Col><Col span={8}>{this.state.proprtyData.total_floor_size}</Col></h3></Row>
                    <Row><h3><Col span={8}>Deposite :</Col><Col span={8}> {this.state.proprtyData.deposite}</Col></h3></Row>
                    <Row><h3><Col span={8}>Rent :</Col><Col span={8}> {this.state.proprtyData.rent}</Col></h3></Row>
                </div>
            )
        
    }
}
