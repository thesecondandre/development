import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Auxs';
import withClass from '../../../hoc/withClass';

class person extends Component {
    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    componentDidMount() {
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }

    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <input
                    ref={(inp) => { this.inputElement = inp }}
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changed: PropTypes.func
}

export default withClass(person, classes.Person);