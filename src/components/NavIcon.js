import React, {Component} from 'react'
import { Stage, Layer, Line } from 'react-konva'

class NavIcon extends Component {
  hoverHighlight(message) {
    console.log(message)
  }

  render () {

    return (
      <div className="nav-icon-main">
        <Stage width={300} height={300}>
          <Layer>
            <Line
              key = {"tech"}
              points = {[150, 0, 300, 75, 300, 225, 150, 150]}
              fill = {'blue'}
              opacity = {0.5}
              closed = {true}
              onMouseOver = {
                this.hoverHighlight("success")
              }
            />
            <Line
              key = {"env"}
              points = {[0, 225, 0, 75, 150, 0, 150, 150]}
              fill = {'blue'}
              opacity = {0.5}
              closed = {true}
            />
            <Line
              key = {"other"}
              points = {[0, 225, 150, 150, 300, 225, 150, 300]}
              fill = {'blue'}
              opacity = {0.5}
              closed = {true}
            />
          </Layer>
          <Layer>
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
