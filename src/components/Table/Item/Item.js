import React from 'react'
import classes from './Item.css'

const Item = (props) => {
  return (
    <div className={classes.Item}>
        {props.name}
    </div>
  )
}

export default Item