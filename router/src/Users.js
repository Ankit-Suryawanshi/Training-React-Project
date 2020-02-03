import React from 'react';
import ShowUsers from './ShowUsers.js';
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
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
          <h1> USERS DATA</h1>
        </center>
        <ShowUsers data={this.state.data}/>
      </div>
    );
  }
}
export default Users
