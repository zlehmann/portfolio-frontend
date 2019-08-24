import React, {Component} from 'react'
import { Stage, Layer, Line } from 'react-konva'

class TechButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCat: "none"
    }
  }

  handleClick = (e) => {
    this.setState({selectedCat: e["target"]["attrs"]["id"]})
  }

  isSelected = (id) => {
    if (id === this.state.selectedCat) {
      return "white"
    } else {
      return "black"
    }
  }

  render () {
    return (
      <Stage width={300} height={300}>
        <Layer>
          <Line
            id = {"tech"}
            points = {[150, 0, 300, 75, 300, 225, 150, 150]}
            fill = {this.isSelected("tech")}
            stroke = {"white"}
            strokeWidth = {0.5}
            opacity = {0.5}
            closed = {true}
            listening = {true}
            onClick = {this.handleClick}
          />
          <Line
            id = {"int"}
            points = {[300, 225, 150, 300, 0, 225, 150, 150]}
            fill = {this.isSelected("int")}
            stroke = {"white"}
            strokeWidth = {0.5}
            opacity = {0.5}
            closed = {true}
            listening = {true}
            onClick = {this.handleClick}
          />
          <Line
            id = {"env"}
            points = {[0, 225, 0, 75, 150, 0, 150, 150]}
            fill = {this.isSelected("env")}
            stroke = {"white"}
            strokeWidth = {0.5}
            opacity = {0.5}
            closed = {true}
            listening = {true}
            onClick = {this.handleClick}
          />
        </Layer>
      </Stage>
    )
  }
}
export default TechButton
