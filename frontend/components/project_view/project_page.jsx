import React from 'react';
import { Link } from 'react-router-dom';
import { createBacking, deleteBacking } from '../../util/backing_api_util';
import scrollToComponent from 'react-scroll-to-component';
import { Alert } from 'reactstrap';

class ProjectViewPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.cancelLike = this.cancelLike.bind(this);
    this.handleCancelPledge = this.handleCancelPledge.bind(this);
    this.handlePledge = this.handlePledge.bind(this);
  }

  componentDidMount() {
    this.props.getAProject(this.props.projectId);
    this.props.getAllRewards();
    this.props.setSearchUIFalse();
    this.props.clearSearchResults();
    scrollToComponent(this.refs.name);
    window.scrollTo(0, 0);
  }

  handlePledge(rewardId) {
    let backing = {reward_id: rewardId, project_id: this.props.project.id}
    this.props.createBacking(backing);
  }

  handleCancelPledge(backingId) {
    this.props.deleteBacking(backingId);
  }

  pledgePercentage() {
    this.props.project.total_pledged / (this.props.project.funding_goal / 100)
  }

  handleLike() {
    if (this.props.currentUser) {
      this.props.createLike(this.props.project.id)
    } else {
      window.alert("Please login to Like the project")
      // Alert.info('Test message 2', {
      //       position: 'bottom-left',
      //       effect: 'bouncyflip',
      //       timeout: 'none'
      // });
    }
  }

  cancelLike() {
    this.props.deleteLike(this.props.project.likeId[0])
  }

  render() {
    console.log(typeof this.props.total_pledged)
    if (this.props.project.backings) {
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
              <div className="progressBar" style={{width: `${this.props.project.total_pledged / (this.props.project.funding_goal / 100)}%`, maxWidth: '100%'}}></div>
              <h2>${this.props.project.total_pledged}</h2>
              <h5 className='project-backing-h5'>pledged of ${this.props.project.funding_goal} goal</h5>
              <h3>{this.props.project.num_backers}</h3>
              <h4>backers</h4>
              <h3>20</h3>
              <h4>days to go</h4>
              {(this.props.project.backings.length === 0) ?
              (<button onClick={() => scrollToComponent(this.rewardslist)}>Back this project</button>) :
              (<button className="cancel-pledge-button" onClick={() => this.handleCancelPledge(this.props.project.backings[0]) }>Cancel pledge</button>)}
              {this.props.currentUser ? (this.props.project.likeId.length === 0 ?
                (<div><img src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/like.png" className="likeButtonProjectPage" onClick={() => this.handleLike()}/></div>)
                :
                (<div><img src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/liked.png" className="dislikeButtonProjectPage" onClick={() => this.cancelLike()}/></div>)
              ) : (null)}
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
                {this.props.currentUser ? (
                  <ul className="rewardslist" ref={(ul) => { this.rewardslist = ul; }}>
                    {(this.props.project.backings.length === 0) ?
                      (this.props.rewards.map( (reward) => <li key={`reard-${reward.id}`}>
                        <h3>{reward.title}</h3>
                        <h4>{reward.description}</h4>
                        <button className="pledge-button" onClick={() => this.handlePledge(reward.id) }>Pledge ${reward.pledge_amount}</button></li>)) :
                      (<li>
                        <h3>{this.props.project.backings[1]}</h3>
                        <h4>{this.props.project.backings[2]}</h4>
                        <button className="cancel-pledge-button" onClick={() => this.handleCancelPledge(this.props.project.backings[0]) }>Cancel pledge</button></li>
                      )
                    }</ul>
                ) : (
                  <Link to="/login"><ul className="rewardslist" ref={(ul) => { this.rewardslist = ul; }}>
                    {(this.props.project.backings.length === 0) ?
                      (this.props.rewards.map( (reward) => <li key={`reard-${reward.id}`}>
                        <h3>{reward.title}</h3>
                        <h4>{reward.description}</h4>
                        <button className="pledge-button" onClick={() => this.handlePledge(reward.id) }>Pledge ${reward.pledge_amount}</button></li>)) :
                      (<li>
                        <h3>{this.props.project.backings[1]}</h3>
                        <h4>{this.props.project.backings[2]}</h4>
                        <button className="cancel-pledge-button" onClick={() => this.handleCancelPledge(this.props.project.backings[0]) }>Cancel pledge</button></li>
                      )}</ul></Link>)}
              </div>
            </section>
          </div>
        </section>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
};

export default ProjectViewPage;
