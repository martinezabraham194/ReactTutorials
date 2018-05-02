import React, { Component } from 'react';

import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';
import Auxs from '../hoc/Auxs';

export const AuthContext = React.createContext(false);

class App extends Component {

  constructor (props) {
    super(props);
    console.log('[App].js Inside Constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()')
  }

  state = {
    persons: [
      {id: '1', name: "Abraham", age: 24},
      {id: '2', name: "Jessica", age: 31},
      {id: '3', name: "John Doe", age: 21}
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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

  //Use prev state when you need to update the state based off data from the prev state
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //this creates a copy of the orginal array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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
        <Auxs>
          <Cockpit 
          appTitle={this.props.title}
          showPersons = {this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonsHandler}/>
          <AuthContext.Provider value={this.state.authenticated}>
          {persons}
          </AuthContext.Provider>
        </Auxs>  
    );
  }
}

export default WithClass(App, classes.App);