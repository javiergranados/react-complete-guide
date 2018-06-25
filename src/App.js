import React, { Component } from 'react'
import './App.css'
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'person1', name: 'Max', age: 27 },
      { id: 'person2', name: 'John', age: 42 },
      { id: 'person3', name: 'Samantha', age: 39 }
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
      cursor: 'pointer',
      ':hover': {
        backgroundColor: ''
      }
    }

    const buttonToogleStyle = JSON.parse(JSON.stringify(buttonStyle))

    if (this.state.showPersons) {
      buttonToogleStyle.backgroundColor = 'red'
      buttonToogleStyle[':hover'].backgroundColor = 'salmon'
    } else {
      buttonToogleStyle.backgroundColor = 'green'
      buttonToogleStyle[':hover'].backgroundColor = 'lightgreen'
    }

    return (
      <StyleRoot>
        <div className='App'>
          <h1>React complete guide</h1>
          <p>Person title will be yellow if his age is major than 45 and red if it's 50 or major</p>
          <button key='1' style={buttonToogleStyle} className='toogleButton' onClick={this.tooglePersonsHandler}>
            {this.state.showPersons ? 'Hide' : 'Show'} persons
          </button>
          { this.state.showPersons &&
            <div>
              <button style={buttonStyle} onClick={() => this.incrementAgeHandler()}>Increment age all persons</button>
              {this.state.persons.map((person, i) => <Person key={person.id} id={person.id} name={person.name} age={person.age} click={this.incrementAgeHandler} index={i + 1} />)}
            </div>
          }
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)
