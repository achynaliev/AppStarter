import React from 'react';
import { Link } from 'react-router-dom';

class ProjectItemView extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <li>
        <section className="ProjectItemView">
          <img src={this.props.project.image_url}/>
            <h4>{this.props.project.title}</h4>
            <h5>{this.props.project.short_description}</h5>
            <h6>created by: {<Link to={`/users/${this.props.project.id}`}>
              {this.props.project.username}</Link>}</h6>
        </section>
      </li>
    )
  }
};



export default ProjectItemView;
