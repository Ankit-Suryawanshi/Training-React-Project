import React, { Component } from 'react'
import { SignInForm } from './SignInForm'
import axios from 'axios'
export default class Update extends Component {

    handleUpdate = user => {
        console.log(user);
        axios.post('http://localhost:8000/api/updatedata',{user})
        .then(res=>{console.log(res);
              alert(res.data.message);  
            console.log(res.data)
        })
        .catch(function(err){
            console.log(err);
        });
    }

    render() {

        return (
            <div>
                <h1>Enter the data in the corresponding field to update</h1>
                <SignInForm onSubmit={this.handleUpdate}/>
            </div>
        )
    }
}
