import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './Person.css';

class Person extends Component {
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"  onChange={this.props.changed} value={this.props.name}/>
            </div>
        );
    }
}

export default Person;