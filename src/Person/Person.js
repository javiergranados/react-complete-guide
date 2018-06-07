import React from 'react'
import './Person.css'

const person = props => {
  return (
    <div className='Person'>
      <p>I'm {props.name} and I'm <span className='age' onClick={() => props.click(props.name)}>{props.age}</span> years old</p>
    </div>
  )
}

export default person
