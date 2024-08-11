import React from 'react'

function Child({passVal,getChild,getChild1}) {
  const giveData="abc";
  return (
    <>
    <div>Child</div>
    <p>{passVal}</p>
    <button onClick={getChild}>click me</button>

    <button onClick={()=>getChild1(giveData)}>click me 1</button>
    </>
  )
}

export default Child