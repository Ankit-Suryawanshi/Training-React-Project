import React from 'react';
import './App.css';
import { home }  from './component/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Profile from './component/Profile';
function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/'>{home}</Route>
            <Route path='/Login' component={Login} /> 
            <Route path='/Signup' component={Signup} />
            <Route path='/Profile' component={Profile}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;