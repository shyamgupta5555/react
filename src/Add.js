

import  { useState } from 'react';


function UpperCase() {
  let [data, setData] =useState(null)
  let [print, setPrint] =useState(null)

  function getData(val){
    setData(val.target.value)
    setPrint(false)
  }
 
  return (
   <div>
     
 <textarea autoComplete='off' style={{fontSize:20}} rows="4" cols="50" onChange={getData}></textarea>

{print? <h1>{data.toUpperCase()}</h1> :null}

 <button style={{width:100, height:40}} onClick={()=>setPrint(true)} >Print Data</button>
   </div>
    
  );
}

export default UpperCase
