import React from 'react';
import './App.css';
import Home  from './component/Home';
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';
//import Login from './component/Login';
import Signup1 from './component/Signup1';
import Profile from './component/Profile';
import Update from './component/Update';
import Registration from './component/Registration';
import Dashbord from './component/Dashbord';
import MultipleImage from './component/MultipleImage'
import history from './helper/history';
function App() {
	return (
		<BrowserRouter >
			<div>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					{/*<Route path='/Login' component={Login} />*/} 
					<Route path='/Signup1' component={Signup1} />
					<Route path='/profile' component={Profile}/>
					<Route path='/update' component={Update}/>
					<Route path='/register' component={Registration}/>
					<Route path='/dashbord' component={Dashbord}/>
					<Route path='/multipleimage' component={MultipleImage}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default (App);