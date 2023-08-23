import React, { useState } from 'react'
import classes from './Container.css'
import Search from '../Search/Search'
import Table from '../Table/Table'

const Container = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [name, setName] = useState('')

  const handleChangeName = (event) => {
    console.log('container.js HandleChangeName')
  }

  return (
    <div className={classes.Container}>
      <h1>Persons Name</h1>
      <Search name={name} handleChangeName={handleChangeName}/>
      <Table persons={persons} />
    </div>
  )
}

export default Container
