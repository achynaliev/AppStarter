import React from 'react';
import { Link } from 'react-router-dom';

class ProjectItemView extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.cancelLike = this.cancelLike.bind(this);
  }

  category() {
    let category = '';
    if (this.props.project.categories[0] === "tech") {
      category = "Technology";
    } else if (this.props.project.categories[0] === "design") {
      category = "Design";
    } else {
      category = "Gadgets"
    }
    return category
  }

  handleLike() {
    if (this.props.currentUser) {
      this.props.createLikeIndex(this.props.project.id)
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
    this.props.deleteLikeIndex(this.props.project.likeId[0])
  }

  render() {
    return (
      <li>
        {(this.props.project.likeId.length === 0) ?
          (<div className="featured_like"><img className="featured_like_img" src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/like.png" className="likeButtonProjectPage" onClick={() => this.handleLike()}/></div>)
          :
          (<div className="featured_like"><img className="featured_like_img" src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/liked.png" className="dislikeButtonProjectPage" onClick={() => this.cancelLike()}/></div>)
        }
        <Link to={`/projects/${this.props.project.id}`}>
        <section className="ProjectItemView">
          <img src={this.props.project.image_url}/>
          <div className="header-explore-project-item">
            <h4>{this.props.project.title}</h4>
            <h6>by: {this.props.project.username}</h6>
          </div>
          <div className="botton-explore-project-item">
            <h3>$86,260  pledged</h3>
            <h4>862% funded</h4>
            <h4>20days to go</h4>
            <h5>{this.category()}</h5>
          </div>
        </section>
        </Link>
      </li>
    )
  }
};



export default ProjectItemView;
