import React from 'react'
import Radium from 'radium'

import './Person.css'

const person = props => {
  const classes = []
  props.age > 45 && classes.push('yellow')
  props.age >= 50 && classes.push('red')

  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  }

  return (
    <div className='Person' style={style}>
      <p className={classes.join(' ')}>Person {props.index}</p>
      <p>I'm {props.name} and I'm <span className='age' onClick={() => props.click(props.id)}>{props.age}</span> years old</p>
    </div>
  )
}

export default Radium(person)
