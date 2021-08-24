import React, { useState } from 'react';

const UseStateBasics = () => {

  const [count,setCount] = useState(0)

  const countHandleMinus=()=>{
    setCount(count-1)
  }

  const countHandlePlus=()=>{
    setCount(count+1)
  }

  return (
    <React.Fragment>
      <button className='btn' onClick={countHandleMinus}> - </button>
      <h1>{count}</h1>
      <button className='btn' onClick={countHandlePlus}> + </button>

    </React.Fragment>

  );
};

export default UseStateBasics;
