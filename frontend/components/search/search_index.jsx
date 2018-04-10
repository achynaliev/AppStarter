import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSearchResults } from '../../util/search_api_util';

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
    };

    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  update(property) {
    return e => {
      this.setState({ [property]: e.target.value }, this.handleSearch)
    }
  }

  handleSearch() {
    console.log(this.state.searchQuery);
    this.props.getSearchResult(this.state.searchQuery);
  }


  render() {
    let projects = Object.values(this.props.projects);
    return (
      <section className="search-main">
        <div className="search-field">
        <input
          type="text"
          value={this.state.searchQuery}
          onInput={this.update('searchQuery')}
          placeholder="Search for projects"
          />
        </div>
        <div className="search-result-list">
          <ul>
            {projects.length === 0 ? (null) :
              (projects.map( (project) =>
              <div key={`project-${project.id}`}>
              {<Link to={`/projects/${project.id}`}>
                <li>
                  <img src={project.image_url}/>
                  <div>
                    <h2>{project.title}</h2>
                    <h3>{project.short_description}</h3>
                  </div>
                </li>
              </Link>}
            </div>))
            }
          </ul>
        </div>
      </section>
    )
  }
};

export default SearchComponent;

//

// {Object.values(this.props.projects).length === 0 ? (null) :
// ({this.props.projects.map( (project) => <li key={`project-${project.id}`}>
// <h2>project.title</h2>
// </li>)})}
