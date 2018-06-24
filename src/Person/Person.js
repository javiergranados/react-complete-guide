import React from 'react'
import './Person.css'

const person = props => {
  const classes = []
  props.age > 45 && classes.push('yellow')
  props.age >= 50 && classes.push('red')

  return (
    <div className='Person'>
      <p className={classes.join(' ')}>Person {props.index}</p>
      <p>I'm {props.name} and I'm <span className='age' onClick={() => props.click(props.id)}>{props.age}</span> years old</p>
    </div>
  )
}

export default person
