import React, {Component} from 'react'
import { Line } from 'react-konva'

class NavIcon extends Component {

  handleClick = () => {
    console.log("click")
  }

  render () {
    return (
      <Line
        key = {"tech"}
        points = {[150, 0, 300, 75, 300, 225, 150, 150]}
        fill = {'blue'}
        opacity = {0.5}
        closed = {true}
        onClick = {this.handleClick}
      />
    )
  }
}
export default NavIcon
