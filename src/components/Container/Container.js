import React, { useState } from 'react'
import classes from './Container.css'
import Search from '../Search/Search'
import Table from '../Table/Table'
import CheckPrevious from '../CheckPrevious/CheckPrevious'

const Container = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [name, setName] = useState('')
  const [pastSearches, setPastSearches] = useState([])
 
  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const getPersons = (name) => {
    return props.persons.filter((person) => {
        if (person.name.toLowerCase().startsWith(name)) {
          return person
        }
        return null
      })
  }

  const handleSearchName = (name) => {
    const search = name.toLowerCase().trimStart().trimEnd()
    //filters the person names list
    const updatedPersons = getPersons(name)
    setPersons(updatedPersons)
    //updates pastSearches list
    if (!pastSearches.includes(search) && search !== '') {
        const updatedSearches = [...pastSearches , search];
        setPastSearches(updatedSearches);
    }
  }

  return (
    <div className={classes.Container}>
      <h1>Persons Name</h1>
      <Search name={name} handleChangeName={handleChangeName} handleSearch={handleSearchName} />
      <CheckPrevious items={pastSearches} handleSearch={handleSearchName} />
      <Table persons={persons} />
    </div>
  )
}

export default Container
