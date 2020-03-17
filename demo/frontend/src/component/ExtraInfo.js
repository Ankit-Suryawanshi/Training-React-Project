import React, { Component } from 'react'
import axios from 'axios'

export default class ExtraInfo extends Component {
    state ={
        extrainfo : '',
        
    }
    componentDidMount(){   
        const id = this.props.id;
        console.log(id);
        axios.get(`http://localhost:8000/api/extrainfoget/${id}`)
        .then(res=>{console.log(res);
            console.log('The data is :')
            console.log(res.data)
            this.setState({extrainfo : res.data.data})
		})
        .catch(function(err){
			alert('LogIn to show Profile!!');
            console.log(err);
        })
      
    }
    render() {
       
            return (
                <div>
                    <h1>{this.state.extrainfo}</h1>
                </div>
            )
        
    }
}
