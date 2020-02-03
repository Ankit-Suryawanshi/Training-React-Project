import React from 'react';
import ShowComments from './ShowComments.js';
class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
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
          <h1> COMMENTS DATA</h1>
        </center>
        <ShowComments data={this.state.data}/>
      </div>
    );
  }
}
export default Comments
