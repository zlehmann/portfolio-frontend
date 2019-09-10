import React, {Component} from 'react';
import './App.css';
import NavContainer from './components/nav/NavContainer.js'
import ContentContainer from './components/content/ContentContainer.js'
import Footer from './components/footer/Footer.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      currentContent: "home",
      currentSelection: "none",
      showBar: false,
      scale: 0.2,
      projects: []
    }
  }

  handleClick(e) {
    this.setState({
      currentSelection: e["target"]["attrs"]["id"],
      showBar: true
    })
  }

  componentDidMount() {
    const response = fetch('https://www.zacharylehmann.com:3000/projects')
      .then(res => res.json())
      .then(json => {
        this.setState({
          projects: json
        })
      })
      .catch(err => {console.log(err)})

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
        <NavContainer
          currentSelection={this.state.currentSelection}
          handleClick={this.handleClick}
          showBar={this.state.showBar}
          scale={this.state.scale}/>
        <ContentContainer currentSelection={this.state.currentSelection} projects={this.state.projects}/>
        <Footer />
      </div>
    );
  }
}

export default App;
