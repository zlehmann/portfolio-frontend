import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Stage, Layer } from 'react-konva';
import NavIcon from './components/NavIcon.js'
import TechButton from './components/TechButton.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stage width={300} height={300}>
          <Layer>
            <TechButton />
            <NavIcon />
          </Layer>
        </Stage>
      </header>
    </div>
  );
}

export default App;
