import React from 'react';
import ReactDOM from 'react-dom';
export default function Heading(value) {
  return (
    <th>{(value.value).toUpperCase()}</th>
  );
}
