import React from 'react'

const person = props => {
  return (
    <div>
      <h1>I'm {props.name} and I'm <span onClick={() => props.click(props.name)}>{props.age}</span> years old</h1>
    </div>
  )
}

export default person
