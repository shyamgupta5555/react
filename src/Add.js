

import  { useState } from 'react';


function UpperCase() {
  let [data, setData] =useState(null)
  function getData(val){
    console.warn(val.target.value)
    setData(val.target.value)

  }
 
  return (
   <div >
    <h1> convert to UpperCase !</h1>
    <p></p>
    <input className='input' type="text" onChange={getData}/>
   </div>
    
  );
}

export default UpperCase
