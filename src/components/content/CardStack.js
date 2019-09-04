import React, {Component} from 'react'
import ProjectCard from './ProjectCard.js'

class CardStack extends Component {

  render() {
    let placeholderProjects = [
      {id: 0, title: "Project 1", type: "Environmental", cardImage: "some url", blurb: "some text"},
      {id: 1, title: "Project 2", type: "Environmental", cardImage: "some url", blurb: "some text"},
      {id: 2, title: "Project 3", type: "Technology", cardImage: "some url", blurb: "some text"},
      {id: 3, title: "Project 4", type: "Technology", cardImage: "some url", blurb: "some text"},
      {id: 4, title: "Project 5", type: "Interests", cardImage: "some url", blurb: "some text"},
      {id: 5, title: "Project 6", type: "Interests", cardImage: "some url", blurb: "some text"}
    ]

    return (
      <div id="projects">
        <h2>{this.props.category}</h2>
        <div id="cardArea">
          {placeholderProjects.map(
            card => <ProjectCard key={card.id} project={card} />)}
        </div>
      </div>
    )
  }
}

export default CardStack
