import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavIcon from './components/NavIcon.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavIcon />
      </header>
    </div>
  );
}

export default App;
