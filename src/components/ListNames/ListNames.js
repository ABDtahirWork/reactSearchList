import React from 'react'
import classes from './ListNames.module.css'
import Item from './ListItem/ListItem'

const ListNames = (props) => {
  return (
    <div className={classes.table}>
      {props.persons.length > 0 ? (
        props.persons.map((element, index) => (
          <Item name={element.name} key={index} />
        ))
      ) : (
        <Item name='No Name Found!' />
      )}
    </div>
  )
}

export default ListNames
