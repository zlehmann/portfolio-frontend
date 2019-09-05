import React, {Component} from 'react'
import NavIcon from './NavIcon.js'
import TechButton from './TechButton.js'
import NavBar from './NavBar.js'

class NavContainer extends Component {

  render () {
    let navbar;
    if(this.props.showBar) {
      navbar = <NavBar currentSelection={this.props.currentSelection} scale={this.props.scale} />
    } else {
      navbar = ""
    }
    return (
      <div id="nav">
        <div id="techButton">
          <TechButton action={this.props.handleClick} scale={this.props.scale}/>
        </div>
        <div id="navIcon" width={300 * this.props.scale} height={300 * this.props.scale}>
          <img id="leaf" alt="Environmental" src={process.env.PUBLIC_URL + '/env-leaf.png'} width={150*this.props.scale}/>
          <img id="gear" alt="Technology" src={process.env.PUBLIC_URL + '/tech-gear.png'} width={150*this.props.scale}/>
          <img id="hammer" alt="Other Interests" src={process.env.PUBLIC_URL + '/int-hammer.png'} width={150*this.props.scale}/>
          <NavIcon scale={this.props.scale} />
        </div>
      </div>
    )
  }
}
export default NavContainer
