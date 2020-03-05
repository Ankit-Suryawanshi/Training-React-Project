import React from 'react';
import './App.css';
import { home }  from './component/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './component/Login';
import Signup1 from './component/Signup1';
import Profile from './component/Profile';
import Update from './component/Update';
import Registration from './component/Registration';
function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path='/'>{home}</Route>
					<Route path='/Login' component={Login} /> 
					<Route path='/Signup1' component={Signup1} />
					<Route path='/Profile' component={Profile}/>
					<Route path='/update' component={Update}/>
					<Route path='/register' component={Registration}/>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;