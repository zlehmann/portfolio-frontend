import React, {Component} from 'react'
import ProjectCard from './ProjectCard.js'

class CardStack extends Component {

  render() {
    //let placeholderProject = {id: 0, title: "Project 1", type: "Environmental", card_image: "wetland1.jpg", blurb: "some textsometextsometextsometextsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome textsome text"}

    let category = this.props.category
    let projectsSorted = []
    if (category === "Recent") {
      projectsSorted = this.props.projects.sort()
    } else {
      projectsSorted = this.props.projects.filter(function(project) {
        return project.proj_type === category
      })
    }

    return (
      <div id="projects">
        <h2>{this.props.category}</h2>
        <div id="cardArea" className="clearfix">
          {projectsSorted.map(card => <ProjectCard key={card.id} project={card} togglePopup={this.props.togglePopup}/>)}
        </div>
      </div>
    )
  }
}

export default CardStack
