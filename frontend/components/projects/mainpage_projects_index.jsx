import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMainpageItem from './mainpage_project_item';
import FeaturedProject from './featured_project';

class ProjectsMainpageIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    return (
      <section className="featured-and-index">
        <section className="right-main-index-projects">
          <ul className="mainpage-project-index">
            {this.props.projects.map( (project) => <ProjectMainpageItem project={project} key={`project-${project.id}`} />)}
          </ul>
        </section>
      </section>
    )
  }
};

// <FeaturedProject project={this.props.projects.first}/>
export default ProjectsMainpageIndex;
