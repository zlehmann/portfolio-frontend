import React, {Component} from 'react';
import './App.css';
import NavContainer from './components/nav/NavContainer.js'
import ContentContainer from './components/content/ContentContainer.js'
import Footer from './components/footer/Footer.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContent: "home",
      currentSelection: "none"
    }
  }

  render() {
    let bgImage = "/env_fenceline.JPG"
    let style = {
      width: "100%",
      height: "400px",
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: "1080px",
      backgroundImage: 'url(' + (process.env.PUBLIC_URL + bgImage) + ')',
      backgroundSize: "cover"
    }

    return (
      <div id="App" style={style}>
        <NavContainer />
        <ContentContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
