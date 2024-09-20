import React, { useEffect, useState } from 'react'
import './titleCounter.css'
export const TitleCounter = () => {
    const [counter, setCounter]= useState(0);
    useEffect(()=>{
        document.title=`count: (${counter})`;
    },[counter])
  return (
    <div className='card'>
     <h1>useEffect challenge</h1>
     <p>counter: {counter}</p>
     <button onClick={()=>setCounter(counter+1)}>click</button>
     <input type='text'></input>
    </div>

  )
}
