import React, {Component} from 'react'
import { Stage, Layer, Line } from 'react-konva'

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
            onClick = {() => {console.log("Clicked tech")}}
          />
          <Line
            key = {"int"}
            points = {[300, 225, 150, 300, 0, 225, 150, 150]}
            fill = {'gray'}
            opacity = {0.5}
            closed = {true}
            listening = {true}
            onClick = {() => {console.log("Clicked int")}}
          />
          <Line
            key = {"env"}
            points = {[0, 225, 0, 75, 150, 0, 150, 150]}
            fill = {'green'}
            opacity = {0.5}
            closed = {true}
            listening = {true}
            onClick = {() => {console.log("Clicked end")}}
          />
        </Layer>
      </Stage>
    )
  }
}
export default TechButton
