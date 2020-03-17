import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import axios from 'axios';
import { LogInForm} from './SignInForm'
import { Modal, Button } from 'antd';



export class Login extends Component {

	
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
     
    render() {
    return (
      	<div className="App">
		
        	{/*<LogInForm onSubmit={this.handleLogIn} />
			*/}
      	</div>
    );
  }
}
/*export default GoogleApiWrapper({
	apiKey: 'AIzaSyDYFVNNlOY9sXtICZLMc90CEADe9DjM990'
  })(Login);*/