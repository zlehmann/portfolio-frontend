import React, {Component} from 'react'
import NavIcon from './NavIcon.js'
import TechButton from './TechButton.js'
import NavBar from './NavBar.js'

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      currentSelection: "none",
      showBar: false,
      scale: 0.2
    }
  }

  handleClick(e) {
    this.setState({
      currentSelection: e["target"]["attrs"]["id"],
      showBar: true
    })
  }

  render () {
    let navbar;
    if(this.state.showBar) {
      navbar = <NavBar currentSelection={this.state.currentSelection} scale={this.state.scale} />
    } else {
      navbar = ""
    }
    return (
      <div id="Nav">
        <div id="techButton">
          <TechButton action={this.handleClick} scale={this.state.scale}/>
        </div>
        <div id="navIcon" width={300 * this.state.scale} height={300 * this.state.scale}>
          <img id="leaf" alt="Environmental" src={process.env.PUBLIC_URL + '/env-leaf.png'} width={150*this.state.scale}/>
          <img id="gear" alt="Technology" src={process.env.PUBLIC_URL + '/tech-gear.png'} width={150*this.state.scale}/>
          <img id="hammer" alt="Other Interests" src={process.env.PUBLIC_URL + '/int-hammer.png'} width={150*this.state.scale}/>
          <NavIcon scale={this.state.scale} />
        </div>
        {navbar}
      </div>
    )
  }
}
export default NavContainer
