import React, { useState } from 'react'
import classes from './App.module.css'
import SearchPage from '../components/SearchPage/SearchPage'

const App = () => {
  const [persons] = useState([
    { name: 'Manu' },
    { name: 'Max' },
    { name: 'Stephanie' },
    { name: 'Sam' },
    { name: 'alex stephanie' },
    { name: 'Bob' },
    { name: 'Bedrick' },
  ])

  return (
    <div className={classes.app}>
      <SearchPage orignalPersons={persons} />
    </div>
  )
}

export default App
