import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
//import './App.css';
import Answer from './Answer.js'
import './index.css';
class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = { firstnumber: ''};
  }

  myChange = (x) =>
  {
    this.setState({firstnumber: this.state.firstnumber + x });
  }
  myAnswer = () =>
  {
      let ans =eval(this.state.firstnumber);
      document.getElementById("input1").value=ans;
      this.setState({firstnumber: ans});
  }
  myClear = () =>
  {
    this.setState({firstnumber:"" });
  }

  render() {
    return (
      <div className="maindiv">

        <div className="divone">

          <input
            id="input1"
            type='text'
            value={this.state.firstnumber}

          />
        </div>
        <Answer firstnumber="firstnumber"  myChange={this.myChange} myAnswer={this.myAnswer} myClear={this.myClear}/>

      </div>
    );
  }
}

export default App;
