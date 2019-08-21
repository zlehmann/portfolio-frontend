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
              points = {[150, 0, 300, 100, 300, 200, 150, 300, 0, 200, 0, 100]}
              fill = {'black'}
              stroke = {'white'}
              strokeWidth = {1}
              closed = {true}
            />
          </Layer>
        </Stage>
      </div>
    )
  }
}
export default NavIcon
