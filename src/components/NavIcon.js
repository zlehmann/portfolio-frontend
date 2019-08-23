import React, {Component} from 'react'
import { Line } from 'react-konva'

class NavIcon extends Component {

  handleClick = () => {
    console.log("click")
  }

  render () {


    return (
      <Line
        points = {[150, 0, 300, 75, 300, 225, 150, 300, 0, 225, 0, 75]}
        fill = {'black'}
        opacity = {0.5}
        stroke = {'white'}
        strokeWidth = {1}
        closed = {true}
        shadowColor = "black"
        shadowBlur = {10}
        shadowOpacity = {0.3}
      />
    )
  }
}
export default NavIcon
