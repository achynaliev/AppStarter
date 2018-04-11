import React from 'react';
import { Link } from 'react-router-dom';

class LastReading extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="mainpage-last-reading">
        <a style={{display: "table-cell"}} target="_blank"href="https://thecreativeindependent.com/people/bennett-foddy-on-the-pitfalls-of-perfectionism/?ref=ksr_home">
          <h1>“You don’t need to be good at my games in order to get the value out of them... they’re indifferent to whether you get to the end or not.”</h1>
          <h4>GAME DESIGNER & TEACHER BENNETT FODDY IN THE CREATIVE INDEPENDENT, A KICKSTARTER-PUBLISHED RESOURCE FOR CREATIVE PEOPLE</h4>
          <h5>READ MORE </h5>
        </a>
      </div>
    )
  }
};

export default LastReading;
