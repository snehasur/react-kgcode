import React from 'react'
import Child from './Child'

function Parent() {
  const parentVal="Parent to child paasing value";
  const getChildVal = ()=>{
    console.log("child to parent passing value");
  }
  const getChildVal1 = (giveData)=>{
    console.log("child to parent passing value"+giveData);
  }

  return (
    <>
    <div>Parent</div>
    <Child passVal={parentVal} getChild={getChildVal} getChild1={getChildVal1}/>
    </>
  )
}

export default Parent