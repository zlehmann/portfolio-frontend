import React, {Component} from 'react'

class NavBar extends Component {

  render() {
    const style = {
      backgroundColor: "rgba(0,0,0, 0.4)",
      position: "absolute",
      width: "90%",
      height: (150 * this.props.scale),
      left: (300 * this.props.scale),
      top: (75 * this.props.scale)
    }


    if(this.props.currentSelection === "tech") {
      return (
        <div id="navBar" style={style}>
          <ul className="techNavLinks">
            <li>tech placeholder</li>
          </ul>
        </div>
      )
    } else if(this.props.currentSelection === "env") {
      return (
        <div id="navBar" style={style}>
          <ul className="envNavLinks">
            <li>env placeholder</li>
          </ul>
        </div>
      )
    } else if(this.props.currentSelection === "int") {
      return (
        <div id="navBar" style={style}>
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
