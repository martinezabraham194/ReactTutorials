import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './Person.css';
import WithClass from '../../../hoc/withClass';
import Auxs from '../../../hoc/Auxs';

class Person extends Component {
    render() {
        return (
            <Auxs>
                <p onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"  onChange={this.props.changed} value={this.props.name}/>
            </Auxs>
        );
    }
}

export default WithClass(Person, classes.Person);