import React, {Component} from 'react'

class ProjectCard extends Component {

  render () {
    let project = this.props.project;
    let description = project.blurb.substring(0,55).concat("...")

    return (
      <div className="projectCard">
        <h3>{project.title}</h3>
        <div className="projectCardImg">
          <img width="180" height="205" src={process.env.PUBLIC_URL + "/project_images/" + project.card_image}/>
        </div>
        <p>{description}</p>
      </div>
    )
  }
}

export default ProjectCard
