import React from 'react'

import Person from './Person/Person'

const persons = (props) => (
  props.showPersons && props.persons.map((person, i) => (
    <Person
      key={person.id}
      id={person.id}
      name={person.name}
      age={person.age}
      click={props.clicked}
      index={i + 1} />
  ))
)

export default persons
