import React from 'react';
import ReactDOM from 'react-dom';
class PostData extends React.Component {
  render() {
    var data=this.props.data;
    console.log(data[0]);
    return (
      <tr>
        <td>{data.userId}</td>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
      </tr>
    );

  }
}
export default PostData;
