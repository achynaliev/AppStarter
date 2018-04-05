import React from 'react';
import { Link } from 'react-router-dom';

class ProjectMainpageItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li className="ProjectItemView">
        {<Link to={`/projects/${this.props.project.id}`}>
        <img src={this.props.project.image_url}/>
        <div>
          <h4>{this.props.project.title}</h4>
          <h6>BY: {this.props.project.username}</h6>
        </div>
        </Link>}
      </li>
    )
  }
};



export default ProjectMainpageItem;
