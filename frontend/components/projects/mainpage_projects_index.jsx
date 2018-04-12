import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMainpageItem from './main_index_item_container';
import FeaturedProject from './featured_container';

class ProjectsMainpageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all'
    };
    this.handlecategory = this.handlecategory.bind(this);
    this.renderCategory = this.renderCategory.bind(this);
    this.renderall = this.renderall.bind(this);
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handlecategory(categoryname) {
    this.setState({ category: categoryname})
  }

  renderCategory() {
    let counter = 0
    return (
      <section className="featured-and-index">
        {this.props.projects.map( (project) => counter === 0 && project.categories[0] === this.state.category ?
          <FeaturedProject project={project} key={`project-${counter++}`} /> : null)}
        <section className="right-main-index-projects">
          <ul className="mainpage-project-index">
            {this.props.projects.map( (project) => counter < 5 && project.categories[0] === this.state.category ?
              <ProjectMainpageItem project={project} key={`project-${counter++}`} /> : null)}
            <Link to="/explore" className="viewall-main-index"><button>VIEW ALL</button></Link>
          </ul>
        </section>
      </section>
    )
  }

  renderall() {
    let counter = 20
    return (
      <section className="featured-and-index">
        {this.props.projects.map( (project, i) => i === 20 ?
          <FeaturedProject project={project} key={`project-${counter++}`} /> : null)}
        <section className="right-main-index-projects">
          <ul className="mainpage-project-index">
            {this.props.projects.map( (project, i) => i > 20 && i < 25 ?
              <ProjectMainpageItem project={project} key={`project-${counter++}`} /> : null)}
            <Link to="/explore" className="viewall-main-index"><button>VIEW ALL</button></Link>
          </ul>
        </section>
      </section>
    )
  }

  render() {
    return (
      <div className="mainpage-projects-categories">
        <section className="mainpage-categories">
          <a onClick={() => this.handlecategory("all")}>All</a>
          <a onClick={() => this.handlecategory("tech")}>Technology</a>
          <a onClick={() => this.handlecategory("design")}>Design</a>
          <a onClick={() => this.handlecategory("gadgets")}>Gadgets</a>
        </section>
        {this.state.category === 'all' ? (this.renderall()) : (this.renderCategory())}
      </div>
    )
  }
};

export default ProjectsMainpageIndex;
