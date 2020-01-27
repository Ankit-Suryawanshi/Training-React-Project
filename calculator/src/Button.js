import React from 'react';
import ReactDOM from 'react-dom';
class Button extends React.Component
{
  render() {
    return(
            <button className="btn btn-primary size"
            type="button"
            onClick={()=>this.props.fnct(this.props.value)}
          >
            {this.props.value}
          </button>
          );

  }
}
export default Button;
