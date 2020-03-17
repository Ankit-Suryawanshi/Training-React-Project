/*import React, { Component } from 'react'
import { Avatar, Col,Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import axios from 'axios'

export default class MoreInfo extends Component {
    state ={
        proprtyData : '',
    }
    componentDidMount(){   
        const id = this.props.id;
        axios.get(`http://localhost:8000/api/moreimage/${id}`)
        .then(res=>{console.log(res);
            console.log('The data is :')
            console.log(res.data.data)
            this.setState({proprtyData : res.data.data})
            console.log(this.state.proprtyData.image[12])			
		})
        .catch(function(err){
			alert('LogIn to show Profile!!');
            console.log(err);
        })
      
    }
    render() {
            
            return (
                <div>
                    
               </div>
            )
        
    }
}*/
