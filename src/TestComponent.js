import React from 'react'

export default function TestComponent(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <button onClick={props.handleClick}>Click</button>
    </div>
  )
}
