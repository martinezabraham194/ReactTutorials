import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import classes from './Person.css';
import WithClass from '../../../hoc/withClass';
import Auxs from '../../../hoc/Auxs';
import { AuthContext  }from '../../../containers/App';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    render() {
        return (
            <Auxs>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name}! And I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={this.inputElement}
                    type="text"  
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Auxs>
        );
    }
}

/**
 * Used to throw errors if the props do not have the 
 * correct types passed into them
 */
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default WithClass(Person, classes.Person);