import React, {Component} from 'react'
import Home from './Home.js'
import Environment from './Environment.js'
import Technology from './Technology.js'
import Interests from './Interests.js'
import CardStack from './CardStack.js'

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContent: "home"
    }
  }

  render() {
    let content;
    let category;
    switch(this.state.currentContent) {
      case "env":
        content = <Environment />
        category = "Environmental"
        break;
      case "tech":
        content = <Technology />
        category = "Technology"
        break;
      case "int":
        content = <Interests />
        category = "Interests"
        break;
      default:
        content = <Home />
        category = "Recent"
      }

    return (
      <div className="contentContainer">
        {content}
        <CardStack category={category}/>
      </div>
    )
  }

}
export default ContentContainer
