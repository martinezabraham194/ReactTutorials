import React, { Component } from 'react';
import logo from './logo.svg';
import Radium from 'radium';

import './App.css';
import Person from './Person/Person';

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

    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangeHandler(event, person.id)}/>
            })}
          </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      }
    }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>This is a react app!</h1>
        <p className={classes.join(' ')} >This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);