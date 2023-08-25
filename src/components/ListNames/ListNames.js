import React from 'react'
import classes from './ListNames.module.css'
import Item from './ListItem/ListItem'

const ListNames = ({ persons }) => {
  return (
    <div className={classes.table}>
      {persons.length > 0 ? (
        persons.map((element, index) => (
          <Item name={element.name} key={index} />
        ))
      ) : (
        <Item name='No Name Found!' />
      )}
    </div>
  )
}

export default ListNames
