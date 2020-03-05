import React, { Component } from 'react'
import axios from 'axios';
import { RegistrationForm } from './RegistrationForm'
export default class Registration extends Component {
    handleRegister = register => {
        console.log(register);
        console.log(localStorage.getItem('image'));
        register = {...register,image : localStorage.getItem('image'), token : localStorage.getItem('token')};
        localStorage.removeItem('image');
        axios.post('http://localhost:8000/api/registration',{register})
          .then(res=>{console.log(res);
            alert(res.data.message);  
            console.log(res.data);
            //this.props.history.push('/login');
          })
          .catch(function(err){
              console.log(err);
          });
    };
    render() {
        return (
            <div className="App">
                <RegistrationForm onSubmit={this.handleRegister} />
            </div>
        )
    }
}
