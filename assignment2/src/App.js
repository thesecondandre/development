import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    entrada: ''
  }

  changeHandler = (event) => {
    this.setState({ entrada: event.target.value });
  }

  deleteCharHandler = (index) => {
    const nEntrada = this.state.entrada.split('');
    nEntrada.splice(index, 1);
    this.setState({ entrada: nEntrada.join('') });
  }

  render() {

    let chars = this.state.entrada.split('').map((c, index) => {
      return <Char valor={c} key={index} click={() => this.deleteCharHandler(index)} />
    });

    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value={this.state.entrada} />
        <Validation tamanho={this.state.entrada.length} />
        {chars}
      </div>
    );
  }
}

export default App;
