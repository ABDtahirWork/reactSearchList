import React, { useState, useEffect } from 'react'
import classes from './CheckPrevious.module.css'

const CheckPrevious = ({ previousSearches, handleSearch }) => {
  const [checkedIndexes, setCheckedIndexes] = useState([])

  useEffect(() => {
    const selectedItems = checkedIndexes.map((index) => previousSearches[index])
    handleSearch(selectedItems)
  }, [checkedIndexes])

  const handleCheckboxChange = (index) => {
    if (checkedIndexes.includes(index)) {
      setCheckedIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index))
    } else {
      setCheckedIndexes((prevIndexes) => [...prevIndexes, index])
    }
  }

  return (
    <div className={classes.checks}>
      {previousSearches.map((previousSearch, index) => (
        <div key={index}>
          <input
            type='checkbox'
            checked={checkedIndexes.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
          <label>{previousSearch}</label>
        </div>
      ))}
    </div>
  )
}

export default CheckPrevious
