import React, {Component} from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <li className="footer-logo">
          <a href="mailto:zlehmann@gmail.com">
            <img id="email" alt="Email" src={process.env.PUBLIC_URL + '/gmail_icon.png'} />
          </a>
        </li>
        <li className="footer-logo">
          <a href="https://github.com/zlehmann">
            <img id="github" alt="GitHub" src={process.env.PUBLIC_URL + '/GitHub-Mark-32px.png'} />
          </a>
        </li>
        <li className="footer-logo">
          <a href="https://www.linkedin.com/in/zacharylehmann/">
            <img id="linkedin" alt="LinkedIn" src={process.env.PUBLIC_URL + '/LI-In-Bug.png'} />
          </a>
        </li>
      </div>
    )
  }
}
export default Footer
