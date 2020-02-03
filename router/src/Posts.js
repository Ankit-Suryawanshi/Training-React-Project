import React from 'react';
import ShowPost from './ShowPost.js';
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data) => {
        this.setState({data: data })
      })
    .catch(console.log)
  }

  render() {
    return (
      <div>
        <center>
          <h1> POSTS DATA</h1>
        </center>
        <ShowPost data={this.state.data}/>
      </div>
    );
  }
}
export default Posts
