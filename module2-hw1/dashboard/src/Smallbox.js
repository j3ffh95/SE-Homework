import React from "react";

function Smallbox(props) {
  return (
    <div className='small-box'>
      <p>{props.title}</p>
      <h3>{props.data1}</h3>
      <h3>{props.data2}</h3>
      <h3>{props.data3}</h3>
    </div>
  );
}

export default Smallbox;
