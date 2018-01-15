import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = classes.Button;
    if(props.show) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    const assignedClasses = [];
    if (props.persons.length < 3) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }
    return (
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button
                className={btnClass}
                onClick={props.click}>Show/Hide Persons</button>
        </React.Fragment>
    );
}

export default cockpit;