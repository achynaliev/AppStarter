import React from 'react';
import { Link } from 'react-router-dom';

class ProjectViewPage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAProject(this.props.projectId);
    this.props.getAllRewards();
  }

  render() {
    console.log(this.props.rewards)
    return (
      <section className="project-page-view">
        <div className="project-view-header">
          <section className="creator-project-view">
            <h5>Created by: {this.props.project.username}</h5>
          </section>
          <section className="project-title-header">
            <h2>{this.props.project.title}</h2>
            <h3>{this.props.project.short_description}</h3>
          </section>
        </div>
        <div className="project-page-main">
          <section>
            <iframe width="820" height="460"
              src={`https://www.youtube.com/embed/${this.props.project.video_url}?modestbranding=1&showinfo=0`}>
            </iframe>
          </section>
          <section className="project-page-backing">
            <h2>$46,842</h2>
            <h5 className='project-backing-h5'>pledged of $9,242 goal</h5>
            <h3>23</h3>
            <h4>backers</h4>
            <h3>20</h3>
            <h4>days to go</h4>
            <button>Back this project</button>
            <h6>All or nothing. This project will only be funded if
              it reaches its goal by Thu, April 26 2018 4:13 AM PDT.</h6>
          </section>
        </div>
        <div className="project-page-campaign-comments">

        </div>
        <div className="Project-campaign">
          <section className="">
            <h2>About</h2>
            <img src={this.props.project.image_url}/>
            <h3>Project description</h3>
            <p className="campaign-about">{this.props.project.full_description}</p>
          </section>
          <section className="campaign-rewards">
            <h2>Support</h2>
            <div>
              <ul>
                {this.props.rewards.map( (reward) => <li key={`reard-${reward.id}`}>
                  <h3>{reward.title}</h3>
                  <h4>{reward.description}</h4>
                  <button>Pledge ${reward.pledge_amount}</button>
                </li>)}
              </ul>
            </div>
          </section>
        </div>
      </section>
    )
  }
};

export default ProjectViewPage;
