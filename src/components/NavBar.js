import React, {Component} from 'react'

class NavBar extends Component {

  render() {
    if(this.props.currentSelection === "tech") {
      return (
        <div id="navBar">
          <ul className="techNavLinks">
            <li>tech placeholder</li>
          </ul>
        </div>
      )
    } else if(this.props.currentSelection === "env") {
      return (
        <div id="navBar">
          <ul className="envNavLinks">
            <li>env placeholder</li>
          </ul>
        </div>
      )
    } else if(this.props.currentSelection === "int") {
      return (
        <div id="navBar">
          <ul className="intNavLinks">
            <li>int placeholder</li>
          </ul>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}
export default NavBar
