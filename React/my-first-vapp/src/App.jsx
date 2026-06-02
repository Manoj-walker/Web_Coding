import React from "react";

function App(){

  let count=0;

  function increase(){
    count+=1;
  }


  return(
    <div>
      <h2>Count is </h2>
      <button onClick={increase()}>increase</button>



    </div>
  )
}

export default App