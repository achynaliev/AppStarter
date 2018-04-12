import React from 'react';
import { Link } from 'react-router-dom';


class FeaturedProject extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.cancelLike = this.cancelLike.bind(this);
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
    console.log(this.props.project)
    return (
      <section className="FeaturedProject">
        {(this.props.project.likeId.length === 0) ?
          (<div className="featured_like"><img className="featured_like_img" src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/like.png" className="likeButtonProjectPage" onClick={() => this.handleLike()}/></div>)
          :
          (<div className="featured_like"><img className="featured_like_img" src="https://s3-us-west-1.amazonaws.com/appstarter-chyna/liked.png" className="dislikeButtonProjectPage" onClick={() => this.cancelLike()}/></div>)
        }
          {<Link to={`/projects/${this.props.project.id}`}>
          <img className="featured_main_img" src={this.props.project.image_url}/>
            <h4>{this.props.project.title}</h4>
            <h6>created by: {this.props.project.username}</h6>
          </Link>}
      </section>
    )
  }
}

export default FeaturedProject;
