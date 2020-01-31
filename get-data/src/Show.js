import React from 'react';
import ReactDOM from 'react-dom';
import HeadingColume from './HeadingColume';
import Data from './Data';
class Show extends React.Component {
  render() {
    const data=this.props.data;
    var heading=['id','name','username','email','address','phone','website','company'];
    var head=heading.map((value)=><HeadingColume value={value}/>);
    return (
      <table id="customers">
        <tr>
          {head}
        </tr>
        {
          data.map((data) => (
          <Data data={data}/>
          ))
        }
      </table>
    );
  }
}

export default Show;
