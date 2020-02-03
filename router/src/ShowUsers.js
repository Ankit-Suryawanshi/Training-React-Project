import React from 'react';
import ReactDOM from 'react-dom';
import UsersHeading from './UsersHeading';
import UsersData from './UsersData';
class ShowUsers extends React.Component {
  render() {
    const data=this.props.data;
    var heading=['id','name','username','email','address','phone','website','company'];
    var head=heading.map((value)=><UsersHeading value={value}/>);
    return (
      <table id="customers">
        <tr>
          {head}
        </tr>
        {
          data.map((data) => (
          <UsersData data={data}/>
          ))
        }
      </table>
    );
  }
}

export default ShowUsers;
