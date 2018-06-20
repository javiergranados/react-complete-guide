import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 27 },
      { name: 'John', age: 32 },
      { name: 'Samantha', age: 29 }
    ],
    showPersons: false
  }

  incrementAgeHandler = (name) => {
    this.setState({
      persons: this.state.persons.map(person => {
        (person.name === name || name instanceof Object) && person.age++
        return person
      })
    })
  }

  tooglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
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
        <h1>React complete guide</h1>
        <button style={buttonStyle} className='toogleButton' onClick={this.tooglePersonsHandler}>Toogle persons</button>
        { this.state.showPersons &&
          <div>
            <button style={buttonStyle} onClick={this.incrementAgeHandler}>Increment age</button>
            {this.state.persons.map((person, i) => <Person key={i} name={person.name} age={person.age} click={this.incrementAgeHandler} />)}
          </div>
        }
      </div>
    )
  }
}

export default App
