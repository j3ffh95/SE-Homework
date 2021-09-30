import React from "react";

function Maincontent(props) {
  return (
    <div className='main-content'>
      <p>{props.title}</p>
      <h3>{props.data}</h3>
      <img src='https://source.unsplash.com/random/400x400' />
    </div>
  );
}

export default Maincontent;
