import React, {Component} from 'react'
import Konva from 'konva';
import { Stage, Layer, Line } from 'react-konva'

class NavIcon extends Component {

  render () {

    return (
      <div className="nav-icon-main">
        <Stage width={300} height={300}>
          <Layer>
            <Line
              points = {[150, 0, 300, 75, 300, 225, 150, 150]}
              fill = {'blue'}
              opacity = {0.5}
              closed = {true}
            />
            <Line
              points = {[0, 225, 0, 75, 150, 0, 150, 150]}
              fill = {'blue'}
              opacity = {0.5}
              closed = {true}
            />
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
          </Layer>
        </Stage>
      </div>
    )
  }
}
export default NavIcon
