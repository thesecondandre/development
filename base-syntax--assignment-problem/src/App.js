import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'andrec'
  }

  changeUserNameHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.changeUserNameHandler} username={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput />
      </div>
    );
  }
}

export default App;
