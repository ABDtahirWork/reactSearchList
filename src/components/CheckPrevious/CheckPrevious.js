import React, { useState, useEffect } from 'react'
import classes from './CheckPrevious.css'

const CheckPrevious = (props) => {
  const [checkedIndexes, setCheckedIndexes] = useState([])

  useEffect(() => {
    const selectedItems = checkedIndexes.map((index) => props.items[index])
    props.handleSearch(selectedItems)
  }, [checkedIndexes])

  const handleCheckboxChange = (index) => {
    if (checkedIndexes.includes(index)) {
      // Remove the index if it's already checked
      setCheckedIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index))
    } else {
      // Add the index if it's not checked
      setCheckedIndexes((prevIndexes) => [...prevIndexes, index])
    }
  }

  return (
    <div className={classes.Checks}>
      {props.items.map((item, index) => (
        <div key={index}>
          <input
            type='checkbox'
            checked={checkedIndexes.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  )
}

export default CheckPrevious
