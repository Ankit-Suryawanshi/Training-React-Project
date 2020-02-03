import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Users from './Users'
import Comments from './Comments'
import Posts from './Posts'

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={
             {color:'red'}
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/users" exact activeStyle={
             {color:'green'}
          }>USERS</NavLink>
        </li>
        <li>
          <NavLink to="/comments" exact activeStyle={
             {color:'magenta'}
          }>COMMENTS</NavLink>
        </li>
        <li>
          <NavLink to="/posts" exact activeStyle={
             {color:'cyan'}
          }>POSTS</NavLink>
        </li>
      </ul>
      <Switch>
         <Route exact path="/" component={App} />
         <Route path="/users" component={Users} />
         <Route path="/comments" component={Comments} />
         <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));
