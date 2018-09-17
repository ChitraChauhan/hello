import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  decrementCount() {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1> Counter: {count} </h1>
        <button onClick={() => this.decrementCount()}> - </button>
        <button onClick={() => this.incrementCount()}> + </button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hello World'
    };
    this.changeNameToLowerCase = this.changeNameToLowerCase.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  changeNameToLowerCase() {
    const { name } = this.state;
    this.setState({ name: name.toLowerCase() });
  }

  changeNameToUpperCase() {
    const { name } = this.state;
    this.setState({ name: name.toUpperCase() });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h1> {name} </h1>
        <input type="text" value={name} onChange={(e) => this.changeName(e)} />
        <button onClick={this.changeNameToLowerCase}> L </button>
        <button onClick={() => this.changeNameToUpperCase()}> U </button>

        <CounterApp />
      </div>
    );
  }
}

export default App;
