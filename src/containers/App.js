import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'

import './App.css'
import PersonList from '../components/Persons/PersonList'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'person1', name: 'Max', age: 27 },
      { id: 'person2', name: 'John', age: 42 },
      { id: 'person3', name: 'Samantha', age: 39 }
    ],
    showPersons: false
  }

  tooglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !prevState.showPersons
      }
    })
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

  render () {
    return (
      <StyleRoot>
        <div className='App'>
          <Cockpit
            showPersons={this.state.showPersons}
            tooglePersonsHandler={this.tooglePersonsHandler}
            incrementAgeHandler={this.incrementAgeHandler} />
          <PersonList
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.incrementAgeHandler} />
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)
