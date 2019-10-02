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
          <p>Technology Projects</p>
        </div>
      )
    } else if(this.props.currentSelection === "env") {
      return (
        <div id="navBar" style={style}>
          <p>Environmental Projects</p>
        </div>
      )
    } else if(this.props.currentSelection === "int") {
      return (
        <div id="navBar" style={style}>
          <p>General Interests</p>
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
