import React, { Component} from 'react';
import classes from './App.css';
import Container from '../components/Container/Container';

class App extends Component {

  state = {
    persons: [
      { name: 'Manu' },
      { name: 'Max' },
      { name: 'Stephanie' },
    ],
  };

  render() {

    return (
      <div className={classes.App}>
        <Container  persons={this.state.persons}/>
      </div>
    );
  }
}

export default App;
