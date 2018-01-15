import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Aux from '../hoc/Auxs';
import withClass from '../hoc/withClass';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Valter', age: 32 },
      { id: 2, name: 'Andre', age: 28 },
      { id: 3, name: 'Mayra', age: 26 }
    ],
    toggleClicked: 0
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(person => person.id === personId);
    const newPerson = { ...this.state.persons[personIndex] };
    newPerson.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = newPerson;
    this.setState({ persons: persons })
  }

  togglePersonsHandler = (event) => {
    this.setState((prevState, props) => {
      return {
        showPersons: !this.state.showPersons,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
        <Cockpit
          appTitle={this.props.title}
          show={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler} />
        {persons}
      </Aux>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  }
}

export default withClass(App, classes.App);