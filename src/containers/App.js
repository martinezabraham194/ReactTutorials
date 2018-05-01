import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {id: '1', name: "Abraham", age: 24},
      {id: '2', name: "Jessica", age: 31},
      {id: '3', name: "John Doe", age: 21}
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //this creates a copy of the orginal array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons =
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>;
    }

    return (
        <div className={classes.App}>
          <Cockpit 
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;