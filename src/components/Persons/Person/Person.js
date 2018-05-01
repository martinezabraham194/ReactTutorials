import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    render() {
        return (
<<<<<<< HEAD
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"  onChange={this.props.changed} value={this.props.name}/>
            </WithClass>
=======
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text"  onChange={this.props.changed} value={this.props.name}/>
            </div>
>>>>>>> 85a9b626c2aee84598eb49507c443f5063562e67
        );
    }
}

export default Person;