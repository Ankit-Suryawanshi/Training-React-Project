import React from 'react';
import logo from './logo.svg';
import './App.css';
import Show from './Show.js';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
        data: []
      }
  }
  componentDidMount()
  {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) =>
        {
          this.setState({data: data })
        })
        .catch(console.log)

  }
  render() {
    return(

   <div>
          <center><h1> App get data from api and render to the view</h1></center>
          <Show data={this.state.data}/>
    </div>
    );
  }
}

export default App;
