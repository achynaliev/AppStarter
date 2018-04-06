import React from 'react';
import { Link } from 'react-router-dom';

class AppStaterStatsView extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   this.props.getAProject(this.props.projectId);
  // }

  today() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    today = dd+'/'+mm+'/'+yyyy;
    return today
  }

  render() {
    return (
      <section className="main-app-stats">
        <ul className="stats-list-main">
          <li>
            <h4>{this.today()}</h4>
            <h5>Bringing creative projects to life.</h5>
          </li>
          <li>
            <h4>TOTAL BACKERS</h4>
            <h5>14,432,333</h5>
          </li>
          <li>
            <h4>FUNDED PROJECTS</h4>
            <h5>141,606</h5>
          </li>
          <li className="last-li-stats-main">
            <h4>LIVE PROJECTS</h4>
            <h5>3,887</h5>
          </li>
        </ul>
      </section>
    )
  }
};

export default AppStaterStatsView;
