import React, {Component} from 'react'
import { Stage, Layer, Line, Rect, Text, } from 'react-konva'

class NavBar extends Component {

  render() {
    console.log(this.props.currentSelection)
    return (
      <ul className="navLinks">
        <li>placeholder</li>
      </ul>
    )
  }
}
export default NavBar
