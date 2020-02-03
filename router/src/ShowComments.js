import React from 'react';
import ReactDOM from 'react-dom';
import CommentsHeading from './CommentsHeading';
import CommentsData from './CommentsData';
class ShowUsers extends React.Component {
  render() {
    const data=this.props.data;
    var heading=['postid','id','name','email','body'];
    var head=heading.map((value)=><CommentsHeading value={value}/>);
    return (
      <table id="customers">
        <tr>
          {head}
        </tr>
        {
          data.map((data) => (
          <CommentsData data={data}/>
          ))
        }
      </table>
    );
  }
}

export default ShowUsers;
