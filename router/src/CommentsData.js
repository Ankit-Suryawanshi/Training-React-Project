import React from 'react';
import ReactDOM from 'react-dom';
class UsersData extends React.Component {
  render() {
    var data=this.props.data;
    console.log(data[0]);
    return (
      <tr>
        <td>{data.postId}</td>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.body}</td>
      </tr>
    );

  }
}
export default UsersData;
