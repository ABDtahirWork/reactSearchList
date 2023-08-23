import React, { useState } from 'react'
import classes from './Container.css'
import Search from '../Search/Search'
import Table from '../Table/Table'

const Container = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [name, setName] = useState('')

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleSearchName = () => {
    const search = name
    const updatedPersons = props.persons.filter((person) => {
      if (person.name.toLowerCase().startsWith(search.toLowerCase().trimStart().trimEnd())) {
        return person
      }
      return null
    })
    setPersons(updatedPersons)
  }

  return (
    <div className={classes.Container}>
      <h1>Persons Name</h1>
      <Search name={name} handleChangeName={handleChangeName} handleSearch={handleSearchName} />
      <Table persons={persons} />
    </div>
  )
}

export default Container
