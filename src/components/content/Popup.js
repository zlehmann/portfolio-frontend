import React, {Component} from 'react'

class Popup extends Component {
  render() {
    let project = this.props.project
    return (
      <div className='popup'>
        <div className='inner_popup'>
          <button className="closeButton" onClick={this.props.togglePopup}>X</button>
          <h1>{project.title}</h1>
          <img alt={project.card_image} src={process.env.PUBLIC_URL + "/project_images/" + project.card_image}/>
          <p>{project.blurb}</p>
        </div>
      </div>
    )
  }

}
export default Popup
