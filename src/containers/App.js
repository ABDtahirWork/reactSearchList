import React, { Component } from 'react'
import classes from './App.css'
import SearchApp from '../components/SearchApp/SearchApp'

class App extends Component {
  state = {
    persons: [
      { name: 'Manu' },
      { name: 'Max' },
      { name: 'Stephanie' },
      { name: 'Sam' },
      { name: 'alex stephanie' },
      { name: 'Bob' },
      { name: 'Bedrick' },
    ],
  }

  render() {
    return (
      <div className={classes.App}>
        <SearchApp persons={this.state.persons} />
      </div>
    )
  }
}

export default App
