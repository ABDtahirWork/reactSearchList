import React, { Component} from 'react';
import classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    persons: [
      { name: 'Manu', age: 29 },
      { name: 'Max', age: 25 },
      { name: 'Stephanie', age: 30 },
    ],
    showPersons: false,
  };

  render() {

    return (
      <div className={classes.App}>

      </div>
    );
  }
}

export default App;
