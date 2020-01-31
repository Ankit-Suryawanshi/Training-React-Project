import React from 'react';
import ReactDOM from 'react-dom';
class HeadingColume extends React.Component
{
  render()
  {
    return(
            <th>{this.props.value.toUpperCase()}</th>
          );

  }
}
export default HeadingColume;
