import React from 'react'
import classes from './Search.module.css'

const Search = ({ name, handleChangeName, handleSearch }) => {
  return (
    <div className={classes.searchBox}>
      <input
        className={classes.input}
        type='text'
        value={name}
        onChange={handleChangeName}
      />
      <button onClick={() => handleSearch(name)}>Search</button>
    </div>
  )
}

export default Search
