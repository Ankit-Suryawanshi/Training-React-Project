import React from 'react';  
import {NavLink } from 'react-router-dom'        
import { Carousel } from 'antd';
export const home = (    
    <div>   
      <ul>  
        <li>  
          <NavLink to="/login" exact activeStyle={  
             {color:'green'}  
          }>LOGIN</NavLink>  
        </li>  
        <li>  
          <NavLink to="/signup"  activeStyle={  
             {color:'magenta'}  
          }>SIGNUP</NavLink>  
        </li>  
      </ul> 
    </div>   
);