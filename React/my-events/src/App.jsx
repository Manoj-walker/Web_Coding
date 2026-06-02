 import React from "react";



 function App(){
  function MouseOver(){
    alert('Button CLicked');
  }


  return(

    <div>

      <button onClick={MouseOver}>Click Me</button>

    </div>
  )
 }

 export default App