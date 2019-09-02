import React from 'react';
import './App.css';
import NavContainer from './components/NavContainer.js'


function App() {
  let bgImage = "/env_fenceline.JPG"
  let style = {
    width: "100%",
    height: "400px",
    marginRight: "auto",
    marginLeft: "auto",
    maxWidth: "980px",
    backgroundImage: 'url(' + (process.env.PUBLIC_URL + bgImage) + ')',
    backgroundSize: "cover"
  }

  return (
    <div id="App" style={style}>
      <NavContainer />
    </div>
  );
}

export default App;
