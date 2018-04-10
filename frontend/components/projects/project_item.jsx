import React from 'react';
import { Link } from 'react-router-dom';

class ProjectItemView extends React.Component {
  constructor(props) {
    super(props);

  }

  category() {
    let category = '';
    if (this.props.project.categories[0] === "tech") {
      category = "Technology";
    } else if (this.props.project.categories[0] === "design") {
      category = "Design";
    } else {
      category = "Gadgets"
    }
    return category
  }

  render() {
    return (
      <li>
        <Link to={`/projects/${this.props.project.id}`}>
        <section className="ProjectItemView">
          <img src={this.props.project.image_url}/>
          <div className="header-explore-project-item">
            <h4>{this.props.project.title}</h4>
            <h6>by: {this.props.project.username}</h6>
          </div>
          <div className="botton-explore-project-item">
            <h3>$86,260  pledged</h3>
            <h4>862% funded</h4>
            <h4>20days to go</h4>
            <h5>{this.category()}</h5>
          </div>
        </section>
        </Link>
      </li>
    )
  }
};



export default ProjectItemView;
