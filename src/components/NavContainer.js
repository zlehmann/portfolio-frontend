import React, {Component} from 'react'
import NavIcon from './NavIcon.js'
import TechButton from './TechButton.js'
import NavBar from './NavBar.js'

class NavContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      currentSelection: ""
    }
  }

  handleClick() {
    this.setState({
      currentSelection: "clicked something"
    })
  }

  render () {
    return (
      <div id="Nav">
        <div id="techButton">
          <TechButton action={this.handleClick}/>
        </div>
        <div id="navIcon">
          <img id="leaf" alt="Environmental" src={process.env.PUBLIC_URL + '/env-leaf.png'} />
          <img id="gear" alt="Technology" src={process.env.PUBLIC_URL + '/tech-gear.png'} />
          <img id="hammer" alt="Other Interests" src={process.env.PUBLIC_URL + '/int-hammer.png'} />
          <NavIcon />
        </div>
        <div id="navBar">
          <NavBar currentSelection={this.state.currentSelection}/>
        </div>
      </div>
    )
  }
}
export default NavContainer
