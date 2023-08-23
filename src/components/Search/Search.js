import React from 'react'
import classes from './Search.css'

const Search = (props) => {
  return (
    <div className={classes.searchBox}>
      <input className={classes.Input} type='text' value={props.name} onChange={props.handleChangeName}/>
      <button>Search</button>
    </div>
  )
}

export default Search
