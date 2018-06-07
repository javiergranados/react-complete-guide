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

  incrementAgeHandler = (name) => {
    this.setState({
      persons: this.state.persons.map(person => {
        (person.name === name || name instanceof Object) && person.age++
        return person
      })
    })
  }

  render () {
    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className='App'>
        <h1>Hello world!</h1>
        {this.state.persons.map((person, i) => <Person key={i} name={person.name} age={person.age} click={this.incrementAgeHandler} />)}
        <button style={buttonStyle} onClick={this.incrementAgeHandler}>Increment age</button>
      </div>
    )
  }
}

export default App
