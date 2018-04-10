import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCategories , AllProjectCategories } from './project_categoies';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'all'
    };
  }

  componentDidMount() {
    this.props.getAllProjects();
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    if (this.props.projects) {
      return (
        <section className="main-body">
          <div className="explore-filter">
            <h2>Show me    <select
              value={this.state.category}
              onChange={this.update('category')}
              className="category-filter">
              <option value="all">all</option>
              <option value="tech">technology</option>
              <option value="design">design</option>
              <option value="gadgets">gadgets</option>
            </select>    projects on earth</h2>
          </div>
        {this.state.category === 'all' ?
        (<AllProjectCategories projects={this.props.projects} category={this.state.category} />) :
        (<ProjectCategories projects={this.props.projects} category={this.state.category} />)}
      </section>)
    } else {
      return (<div></div>)
    }
  }
};



export default ProjectsIndex;
