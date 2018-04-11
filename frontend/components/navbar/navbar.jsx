import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting_container';
import SearchContainer from '../search/search_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false
    }
    this.displaySearch = this.displaySearch.bind(this);
    this.dislayXmark = this.dislayXmark.bind(this);
    this.openSearchDisplay = this.openSearchDisplay.bind(this);
    this.closeSearchDisplay = this.closeSearchDisplay.bind(this);
  }

  componentWillMount() {
    this.props.setSearchUITrue();
  }

  displaySearch() {
    if (this.state.showSearch) {
      return (<SearchContainer />);
    } else {
      return <div></div>;
    }
  }

  dislayXmark() {
    if (this.state.showSearch) {
      return (<a className="searchxmark" onClick={this.closeSearchDisplay}>X</a>);
    } else {
      return <div></div>;
    }
  }

  openSearchDisplay() {
    this.setState({ showSearch: true });
  }

  closeSearchDisplay() {
    this.setState({ showSearch: false })
  }

  render() {
    return (
      <nav>
        <section className="leftnavbar">
          {this.props.exploreLink}
          {this.props.startProject}
        </section>
        <section className="midNavbar">
          <h2>{<Link to="/">APPSTARTER</Link>}</h2>
        </section>
        <section className="rightNavbar">
          <a onClick={this.openSearchDisplay}>Search</a>
          <Greeting />
        </section>
        {this.dislayXmark()}
        {this.displaySearch()}
      </nav>
    )
  }
};



export default NavBar;
