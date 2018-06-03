import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 27 },
      { name: 'John', age: 32 },
      { name: 'Samantha', age: 29 }
    ]
  }

  render () {
    return (
      <div className='App'>
        <h1>Hello world!</h1>
        {this.state.persons.map((person, i) => <Person key={i} name={person.name} age={person.age} />)}
      </div>
    )
  }
}

export default App
