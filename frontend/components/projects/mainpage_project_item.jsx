import React from 'react';
import { Link } from 'react-router-dom';

class ProjectMainpageItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li>
        <section className="ProjectItemView">
          {<Link to={`/users/${this.props.project.userId.id}`}>
          <img src={this.props.project.image_url}/>
            <h4>{this.props.project.title}</h4>
            </Link>}
            <h6>BY: {this.props.project.username}</h6>
        </section>
      </li>
    )
  }
};



export default ProjectMainpageItem;
