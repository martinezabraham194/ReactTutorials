import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

import './Person.css';

const person = (props) => (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name}! And I'm {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text"  onChange={props.changed} value={props.name}/>
    </div>
)

export default Radium(person);