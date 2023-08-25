import React from 'react'
import classes from './ListItem.module.css'

const ListItem = ({name}) => {
  return (
    <div className={classes.item}>
        {name}
    </div>
  )
}

export default ListItem