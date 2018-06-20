import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'person1', name: 'Max', age: 27 },
      { id: 'person2', name: 'John', age: 32 },
      { id: 'person3', name: 'Samantha', age: 29 }
    ],
    showPersons: false
  }

  incrementAgeHandler = (id) => {
    let persons = null

    if (id) {
      const personIndex = this.state.persons.findIndex(p => p.id === id)
      const personUpdated = { ...this.state.persons[personIndex] }

      personUpdated.age++

      persons = [...this.state.persons]
      persons[personIndex] = personUpdated
    } else {
      persons = this.state.persons.map(p => {
        p.age++
        return p
      })
    }

    this.setState({ persons: persons })
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
        <button style={buttonStyle} className='toogleButton' onClick={this.tooglePersonsHandler}>
          {this.state.showPersons ? 'Hide' : 'Show'} persons
        </button>
        { this.state.showPersons &&
          <div>
            <button style={buttonStyle} onClick={() => this.incrementAgeHandler()}>Increment age all persons</button>
            {this.state.persons.map(person => <Person key={person.id} id={person.id} name={person.name} age={person.age} click={this.incrementAgeHandler} />)}
          </div>
        }
      </div>
    )
  }
}

export default App
