import React from "react";
import useFetch from "./customhook";
import usePrint1 from './print'
import Data from './Data'
export default function App(props) {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");
  const heading = usePrint1();
  return (
    <table id="customers">
      <tr>
        {heading}
      </tr>
      {
        data.map((data) => (
        <Data data={data}/>
        ))
      }
    </table>
  );
}
