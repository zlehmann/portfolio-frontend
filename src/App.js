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
        <img id="leaf" alt="Environmental" src={process.env.PUBLIC_URL + '/env-leaf.png'} />
        <img id="gear" alt="Technology" src={process.env.PUBLIC_URL + '/tech-gear.png'} />
        <img id="hammer" alt="Other Interests" src={process.env.PUBLIC_URL + '/int-hammer.png'} />
        <NavIcon />
      </div>
    </div>
  );
}

export default App;
