import logo from './logo.svg';
import './App.css';

import Greetings from "./Greetings";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1><Greetings firstName="Alex" lastName="Tet" /> It's React frontend</h1>

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
