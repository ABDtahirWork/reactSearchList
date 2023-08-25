import React from 'react'
import classes from './ListItem.module.css'

const ListItem = (props) => {
  return (
    <div className={classes.item}>
        {props.name}
    </div>
  )
}

export default ListItem