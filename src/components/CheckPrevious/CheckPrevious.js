import React, { useState } from 'react'
import classes from './CheckPrevious.css'

const CheckPrevious = (props) => {
  const [checkedIndex, setCheckedIndex] = useState(null)

  const handleCheckboxChange = (index) => {
    setCheckedIndex(index)
    props.handleSearch(props.items[index])
  }

  return (
    <div className={classes.Checks}>
      {props.items.map((item, index) => (
        <div key={index}>
          <input
            type='checkbox'
            checked={checkedIndex === index}
            onChange={() => handleCheckboxChange(index)}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
  )
}

export default CheckPrevious
