import React from 'react';
import { Link } from 'react-router-dom';

class AppStaterFooter extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <section className="app-footer">
        <div className="footer-links">
          <ul>
            <li>
              <a style={{display: "table-cell"}} target="_blank" href="https://github.com/achynaliev">
              <img src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/github-logo.png"></img>
                </a>
            </li>
            <li>
              <a style={{display: "table-cell"}} target="_blank" href="https://github.com/achynaliev">
              <h2>ABOUT</h2>
              <h3>About us</h3>
              <h3>Our charter</h3>
              <h3>Stats</h3>
              <h3>Press</h3>
              <h3>Jobs</h3>
              </a>
            </li>
            <li>
              <a style={{display: "table-cell"}} target="_blank" href="https://www.linkedin.com/in/achynaliev/">
              <h2>SUPPORT</h2>
              <h3>Help Center</h3>
              <h3>Contact</h3>
              <h3>Our Rules</h3>
              <h3>Creator Handbook</h3>
              <h3>Campus</h3>
              <h3>Patrons</h3>
              </a>
            </li>
            <li>
              <a style={{display: "table-cell"}} target="_blank" href="https://github.com/achynaliev">
              <h2>HELLO</h2>
              <h3>Kickstarter Blog</h3>
              <h3>Engineering Blog</h3>
              <h3>Newsletters</h3>
              </a>
            </li>
            <li>
              <a style={{display: "table-cell"}} target="_blank" href="https://www.linkedin.com/in/achynaliev/">
              <h2>MORE FROM KICKSTARTER</h2>
              <h3>Drip</h3>
              <h3>Kickstarter Live</h3>
              <h3>The Creative Independent</h3>
              </a>
            </li>
            <li>
              <a style={{display: "table-cell"}} target="_blank" href="https://www.linkedin.com/in/achynaliev/">
              <img src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/linked.png"></img>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
};

export default AppStaterFooter;
