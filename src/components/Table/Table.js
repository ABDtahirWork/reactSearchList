import React from 'react'
import classes from './Table.css'
import Item from './Item/Item'

const Table = (props) => {
  return (
    <div className={classes.Table}>
        {props.persons.map((element , index) => {
            return <Item name={element.name} key={index}/>
        })}
    </div>
  )
}

export default Table