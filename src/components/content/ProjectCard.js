import React, {Component} from 'react'

class ProjectCard extends Component {

  render () {
    let project = this.props.project;

    return (
      <div className="projectCard">
        <h3>{project.title}</h3>
        <div className="projectCardImg"></div>
        <p>{project.blurb}</p>
      </div>
    )
  }
}

export default ProjectCard
