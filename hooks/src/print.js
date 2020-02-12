import React from 'react';
import {useState,useEffect} from 'react';
import Heading  from './heading'
export default function usePrint1() {
  var heading=['id','name','username','email','address','phone','website','company'];
  var h = heading.map((value,index)=> < Heading value={value} key={index}/> )
  return h;
}
