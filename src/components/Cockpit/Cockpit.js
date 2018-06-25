import React from 'react'
import Radium from 'radium'

import './Cockpit.css'

const Cockpit = props => {
  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: ''
    }
  }

  const buttonToogleStyle = JSON.parse(JSON.stringify(buttonStyle))

  if (props.showPersons) {
    buttonToogleStyle.backgroundColor = 'red'
    buttonToogleStyle[':hover'].backgroundColor = 'salmon'
  } else {
    buttonToogleStyle.backgroundColor = 'green'
    buttonToogleStyle[':hover'].backgroundColor = 'lightgreen'
  }

  return (
    <div className='Cockpit'>
      <h1>React complete guide</h1>
      <p>Person title will be yellow if his age is major than 45 and red if it's 50 or major</p>
      <button key='1' style={buttonToogleStyle} className='toogleButton' onClick={props.tooglePersonsHandler}>
        {props.showPersons ? 'Hide' : 'Show'} persons
      </button>
      { props.showPersons &&
        <button style={buttonStyle} className='incrementButton' onClick={() => props.incrementAgeHandler()}>Increment age all persons</button>
      }
    </div>
  )
}

export default Radium(Cockpit)
