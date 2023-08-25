import React, { useState } from 'react'
import classes from './Container.module.css'
import Search from '../Search/Search'
import ListNames from '../ListNames/ListNames'
import CheckPrevious from '../CheckPrevious/CheckPrevious'

const SearchPage = ({ orignalPersons }) => {
  const [persons, setPersons] = useState(orignalPersons)
  const [name, setName] = useState('')
  const [pastSearches, setPastSearches] = useState([])

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const getItems = (name) => {
    return orignalPersons.filter((person) => {
      if (person.name.toLowerCase().startsWith(name)) {
        return person
      }
      return null
    })
  }

  const handleCheckboxSearch = (selectedItems) => {
    if (selectedItems.length > 0) {
      const tempPersons = selectedItems.reduce((acc, selectedSearch) => {
        const selectedItemsData = getItems(selectedSearch)
        return [...acc, ...selectedItemsData]
      }, [])
      setPersons(tempPersons)
    } else {
      setPersons(orignalPersons)
    }
  }

  const handleSearchName = (name) => {
    const search = name.toLowerCase().trim()
    setPersons(getItems(search))
    if (!pastSearches.includes(search) && search !== '') {
      setPastSearches([...pastSearches, search])
    }
  }

  return (
    <div className={classes.container}>
      <h1>Persons Name</h1>
      <Search
        name={name}
        handleChangeName={handleChangeName}
        handleSearch={handleSearchName}
      />
      <CheckPrevious
        previousSearches={pastSearches}
        handleSearch={handleCheckboxSearch}
      />
      <ListNames persons={persons} />
    </div>
  )
}

export default SearchPage
