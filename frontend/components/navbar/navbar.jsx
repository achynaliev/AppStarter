import React from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting_container';
import SearchComponent from '../search/search_index';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

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
        <a>Search</a>
        <Greeting />
      </section>
      </nav>
    )
  }
};



export default NavBar;
