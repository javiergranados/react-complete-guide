import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Hello world!</h1>
        <Person name='Max' age='27' />
        <Person name='John' age='32' />
        <Person name='Samantha' age='29' />
      </div>
    )
  }
}

export default App
