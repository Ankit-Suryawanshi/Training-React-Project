import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js'
class Answer extends React.Component
{
  render() {
          var array=['+','-','*','/'];
          var array1=['%','1','2','3'];
          var array2=['4','5','6','7'];
          var array3=['8','9','0'];
          var arr=array.map((value)=><Button value={value} fnct={this.props.myChange}/>);
          var arr1=array1.map((value)=><Button value={value} fnct={this.props.myChange}/>);
          var arr2=array2.map((value)=><Button value={value} fnct={this.props.myChange}/>);
          var arr3=array3.map((value)=><Button value={value} fnct={this.props.myChange}/>);
    return(
      <div>
        <div className="btn-group mr-2">
          {arr}

        </div>

        <div className="btn-group mr-2">
           {arr1}
        </div>


        <div className="btn-group mr-2">
          {arr2}
        </div>


        <div className="btn-group mr-2">
          {arr3}
          <button className="btn btn-primary size"
            type="button"
            onClick={()=>this.props.myAnswer()}
          >
            =
          </button>
        </div>
        <br/>

        <div className="btn-group mr-2 last">
          <button className="btn btn-primary clear"
            type="button"
            onClick={()=>this.props.myClear()}
          >
          clear
          </button>
        </div>
        </div>
      );

  }
}
export default Answer;
