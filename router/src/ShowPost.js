import React from 'react';
import ReactDOM from 'react-dom';
import PostHeading from './PostHeading';
import PostData from './PostData';
class ShowPost extends React.Component {
  render() {
    const data=this.props.data;
    var heading=['userid','id','title','body'];
    var head=heading.map((value)=><PostHeading value={value}/>);
    return (
      <table id="customers">
        <tr>
          {head}
        </tr>
        {
          data.map((data) => (
          <PostData data={data}/>
          ))
        }
      </table>
    );
  }
}

export default ShowPost;
