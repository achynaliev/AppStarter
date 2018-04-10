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

  // componentDidMount() {
  //   this.props.getSearchResult(this.state.searchQuery);
  // }
  // componentWillReceiveProps() {
  //   this.props.getSearchResult(this.state.searchQuery);
  // }

  // shouldComponentUpdate() {
  //   // fetchSearchResults(this.state.searchQuery).then( searchResults =>
  //   // this.setState({searchResults}))
  //   // this.props.getSearchResult(this.state.searchQuery);
  //   return true
  // }

  // componentWillUpdate() {
  //   // fetchSearchResults(this.state.searchQuery).then( searchResults =>
  //   // this.setState({searchResults}))
  //   this.props.getSearchResult(this.state.searchQuery);
  // }

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
    console.log(this.state.searchQuery)
    return (
      <section className="search-main">
        <div className="search-field">
        <input
          type="text"
          value={this.state.searchQuery}
          onInput={this.update('searchQuery')}
          placeholder="search"
          />
        </div>
        <div className="search-result-list">
          <ul>
          </ul>
        </div>
      </section>
    )
  }
};

export default SearchComponent;

// {Object.values(this.state.searchResults).length === 0 ? (null) : (
// {this.state.searchResults.map( (project) => <li key={`project-${project.id}`}>
// <h2>project.title</h2>
// </li>)})}
