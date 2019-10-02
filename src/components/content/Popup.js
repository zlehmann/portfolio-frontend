import React, {Component} from 'react'

class Popup extends Component {
  render() {
    let project = this.props.project
    let media = ""
    if (project.title === "Fetch My Corgi") {
      media = <iframe title={project.title} className="video" width="560" height="315" src="https://www.youtube.com/embed/o6kpvwnZa7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    } else if (project.title === "Virtual Fly Box") {
      media = <iframe title={project.title} className="video" width="560" height="315" src="https://www.youtube.com/embed/z3PSvTDIAkw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    } else {
      media = <img alt={project.card_image} src={process.env.PUBLIC_URL + "/project_images/" + project.card_image}/>
    }
    return (
      <div className='popup'>
        <div className='inner_popup'>
          <button className="closeButton" onClick={this.props.togglePopup}>X</button>
          <h1>{project.title}</h1>
          <div className="media">{media}</div>
          <p>{project.blurb}</p>
        </div>
      </div>
    )
  }

}
export default Popup
