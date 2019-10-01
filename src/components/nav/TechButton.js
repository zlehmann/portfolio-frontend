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

  componentDidMount() {
    if (this.props.currentSelection =="home") {
      this.setState({
        selectedCat: "none",
        hoveredCat: "none"
      })
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
    this.props.action(e["target"]["attrs"]["id"])
  }

  isSelectedFill = (id) => {
    if (id === this.state.selectedCat || id === this.state.hoveredCat) {
      return "white"
    } else {
      return "none"
    }
  }

  render () {
    let techCoors = [150, 0, 300, 75, 300, 225, 185, 165, 185, 130, 150, 105];
    let envCoors = [0, 225, 0, 75, 150, 0, 150, 105, 115, 130, 115, 165];
    let intCoors = [300, 225, 150, 300, 0, 225, 115, 165, 150, 185, 185, 165];
    let homeCoors = [150, 105, 185, 130, 185, 165, 150, 185, 115, 165, 115, 130]

    return (
      <Stage width={this.props.scale * 350} height={this.props.scale * 350}>
        <Layer>
          <Line
            id = {"tech"}
            points = {techCoors.map(x => x * this.props.scale)}
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
            points = {intCoors.map(x => x * this.props.scale)}
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
            points = {envCoors.map(x => x * this.props.scale)}
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
          <Line
            id = {"home"}
            points = {homeCoors.map(x => x * this.props.scale)}
            fill = {this.isSelectedFill("home")}
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
