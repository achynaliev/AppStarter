import React from 'react';
import { Link } from 'react-router-dom';

class RecommendedProjects extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAllProjects();
  }


  render() {
    return (
      <div className="mainpage-recommened_projects">
        <div>
          <h2>Recommended for you</h2>
        </div>
        <ul>
          {this.props.projects.map( (project, i) => i > 15 && i < 20 ?
            <Link to={`/projects/${project.id}`} key={`project-${project.id}`}><li>
            <img src={project.image_url}/>
            <h3>{project.title}</h3>
          </li></Link> : null)}
        </ul>
      </div>
    )
  }
};

export default RecommendedProjects;
