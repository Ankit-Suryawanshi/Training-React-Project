import React from 'react';
import axios from 'axios';
import '../index.css'
//import './App.css';
import { SignInForm } from './SignInForm';


class Signup1 extends React.Component {
  handleSignIn = user => {
      console.log(user);
      axios.post('http://localhost:8000/api/signup',{user})
        .then(res=>{console.log(res);
          alert(res.data.message);  
          console.log(res.data);
          this.props.history.push('/login');
        })
        .catch(function(err){
            console.log(err);
        });
  };
  render() {
    return (
      <div className="App">

          <SignInForm onSubmit={this.handleSignIn} />

      </div>
    );
  }
}
export default Signup1;
