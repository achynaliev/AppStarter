import React from 'react';
import { Link } from 'react-router-dom';
import ProjectItemView from './project_item';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    return (
      <section className="main-body">
        <ul className="ProjectIndexUL">
          {this.props.projects.map( (project) => <ProjectItemView project={project} key={`project-${project.id}`} />)}
        </ul>
      </section>
    )
  }
};



export default ProjectsIndex;
