import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import axios from 'axios';
import { LogInForm} from './SignInForm'


export default class Login extends Component {

	handleLogIn = (user)=> {
        axios.post('http://localhost:8000/api/login',{user})
		.then(res=>{console.log(res);
			alert(res.data.message);
			console.log(res.data.message)
          	localStorage.setItem('token',res.data.token);
			console.log(localStorage.getItem('token'));
			this.props.history.push('/profile');
		
        })
        .catch(function(err){
        	console.log(err);
        });
    }
     
    render() {
    return (
      	<div className="App">
        	<LogInForm onSubmit={this.handleLogIn} />
      	</div>
    );
  }
}
