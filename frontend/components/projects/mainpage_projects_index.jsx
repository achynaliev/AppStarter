import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMainpageItem from './mainpage_project_item';
import { FeaturedProject } from './featured_project';

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
        {this.props.projects.map( (project , i) => i == 4 ? <FeaturedProject project={project} key={`project-${project.id}`} /> : null)}
        <section className="right-main-index-projects">
          <ul className="mainpage-project-index">
            {this.props.projects.map( (project , i) => i < 4 ? <ProjectMainpageItem project={project} key={`project-${project.id}`} /> : null)}
            <Link to="/explore" className="viewall-main-index"><button>VIEW ALL</button></Link>
          </ul>
        </section>
      </section>
    )
  }
};

export default ProjectsMainpageIndex;
