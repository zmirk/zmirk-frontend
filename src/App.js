import React from "react";
import logo from './logo.svg';
import './App.css';

import Greetings from "./Greetings";

class SimpleForm extends React.Component {
  state = {
    firstName: "",
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  render() {
    return (
      <div>
        <input type="text" name="firstName" onChange={this.onFirstNameChange} />
        <Greetings firstName={this.state.firstName} />
      </div>
    );
  }
}

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1><Greetings firstName="Alex" lastName="Tet" /> It's React frontend...</h1>
      <SimpleForm/>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
