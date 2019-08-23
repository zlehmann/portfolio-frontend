import React, {Component} from 'react'
import { Stage, Layer, BaseLayer, Line } from 'react-konva'

class TechButton extends Component {

  render () {

    return (
      <Stage width={300} height={300}>
        <Layer>
          <Line
            key = {"tech"}
            points = {[150, 0, 300, 75, 300, 225, 150, 150]}
            fill = {'blue'}
            opacity = {0.5}
            closed = {true}
            listening = {true}
            onClick = {() => {console.log("Click")}}
          />
        </Layer>
      </Stage>
    )
  }
}
export default TechButton
