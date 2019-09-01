import React, {Component} from 'react'
import { Stage, Layer, Line } from 'react-konva'

class TechButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredCat: "none",
      selectedCat: "none",
      btnOpacity: 0.2
    }
  }

  handleMouseEnter = (e) => {
    this.setState({hoveredCat: e["target"]["attrs"]["id"]})
  }

  handleMouseLeave = (e) => {
    this.setState({hoveredCat: "none"})
  }

  handleClick = (e) => {
    this.setState({selectedCat: e["target"]["attrs"]["id"]})
    this.props.action(e)
  }

  isSelectedFill = (id) => {
    if (id === this.state.selectedCat || id === this.state.hoveredCat) {
      return "white"
    } else {
      return "none"
    }
  }

  render () {
    return (
      <Stage width={300} height={300}>
        <Layer>
          <Line
            id = {"tech"}
            points = {[150, 0, 300, 75, 300, 225, 150, 150]}
            fill = {this.isSelectedFill("tech")}
            stroke = {"white"}
            strokeWidth = {0.5}
            opacity = {this.state.btnOpacity}
            closed = {true}
            listening = {true}
            onMouseEnter = {this.handleMouseEnter}
            onMouseLeave = {this.handleMouseLeave}
            onClick = {this.handleClick}
          />
          <Line
            id = {"int"}
            points = {[300, 225, 150, 300, 0, 225, 150, 150]}
            fill = {this.isSelectedFill("int")}
            stroke = {"white"}
            strokeWidth = {0.5}
            opacity = {this.state.btnOpacity}
            closed = {true}
            listening = {true}
            onMouseEnter = {this.handleMouseEnter}
            onMouseLeave = {this.handleMouseLeave}
            onClick = {this.handleClick}
          />
          <Line
            id = {"env"}
            points = {[0, 225, 0, 75, 150, 0, 150, 150]}
            fill = {this.isSelectedFill("env")}
            stroke = {"white"}
            strokeWidth = {0.5}
            opacity = {this.state.btnOpacity}
            closed = {true}
            listening = {true}
            onMouseEnter = {this.handleMouseEnter}
            onMouseLeave = {this.handleMouseLeave}
            onClick = {this.handleClick}
          />
        </Layer>
      </Stage>
    )
  }
}
export default TechButton
