import React, {Component} from 'react'
import Home from './Home.js'

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentContent: "home"
    }
  }

  render() {
    let content;
    if(this.state.currentContent==="home") {
      content = <Home />
    }
    return (
      <div className="contentContainer">
        {content}
      </div>
    )
  }

}
export default ContentContainer
