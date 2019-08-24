import React from 'react';
import './App.css';
//import { Stage, Layer } from 'react-konva';
import NavIcon from './components/NavIcon.js'
import TechButton from './components/TechButton.js'

function App() {

  return (
    <div id="App">
      <div id="techButton">
        <TechButton />
      </div>
      <div id="navIcon">
        <NavIcon />
      </div>
    </div>
  );
}

export default App;
