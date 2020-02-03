import React from 'react';
import ReactDOM from 'react-dom';
class CommentsHeading extends React.Component {
  render() {
    var value=this.props.value;
    return (
        <th>{value.toUpperCase()}</th>
    );
  }
}
export default CommentsHeading;
