import React from 'react'

const Button = (props) => {
    // destruct arr {name, age, arr}
    // console.log(props);
  return (
    <>
    <button >{props.arr[2]}</button>
    <button onClick={props.func}>Click</button>
    </>
  )
}

export default Button