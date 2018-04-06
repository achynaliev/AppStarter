import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectCampaign } from './project_campaign'

class ProjectViewPage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getAProject(this.props.projectId);
  }

  render() {
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
        <ProjectCampaign project={this.props.project}/>
      </section>
    )
  }
};

export default ProjectViewPage;
