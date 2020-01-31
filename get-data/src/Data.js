import React from 'react';
import ReactDOM from 'react-dom';
class Data extends React.Component {
  render() {
    var data=this.props.data;
    console.log(data[0]);
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{data.email}</td>
        <td>
          {data.address.street},
          {data.address.suite},
          {data.address.city},
          {data.address.zipcode},
          {data.address.geo.let},
          {data.address.geo.lng},
        </td>
        <td>{data.phone}</td>
        <td>{data.website}</td>
        <td>
          {data.company.name}
          {data.company.catchPhrase}
          {data.company.bs}
        </td>
      </tr>
    );

  }
}
export default Data;
