import React from 'react';
import { Link } from 'react-router-dom';

class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <section className="FeaturedProject">
          {<Link to={`/projects/${this.props.project.id}`}>
          <img src={this.props.project.image_url}/>
            <h4>{this.props.project.title}</h4>
            <h6>created by: {this.props.project.username}</h6>
          </Link>}
        </section>
    )
  }
};



export default FeaturedProject;
