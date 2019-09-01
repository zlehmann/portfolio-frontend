import React, {Component} from 'react'
import { Stage, Layer, Line } from 'react-konva'

class NavIcon extends Component {

  render () {
    let coors = [150, 0, 300, 75, 300, 225, 150, 300, 0, 225, 0, 75]
    return (
      <Stage width={this.props.scale * 300} height={this.props.scale * 300}>
        <Layer>
          <Line
            points = {coors.map(x => x * this.props.scale)}
            fill = {'black'}
            opacity = {0.5}
            stroke = {'white'}
            strokeWidth = {1}
            closed = {true}
            shadowColor = "black"
            shadowBlur = {10}
            shadowOpacity = {0.3}
          />
        </Layer>
      </Stage>
    )
  }
}
export default NavIcon
