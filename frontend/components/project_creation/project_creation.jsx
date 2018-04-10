import React from 'react';

import { withRouter } from 'react-router-dom';

const CATEGORIES = ['tech', 'design', 'gadgets'];

class ProjectCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      short_description: '',
      full_description: '',
      funding_goal: '',
      funding_end_date: '',
      image_url: '',
      video_url: '',
      category: 'tech'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.currentUser ? (null) : (this.redirect())
  }

  componentDidMount() {
    this.props.clearProjectErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createProject(this.state)
      .then(project => this.props.history.push(`/projects/${project.id}`));
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors() {
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  redirect() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <section className="project-creation-main">
        <h1>Bring your creative project to life.</h1>
        <ul>
          {this.errors()}
        </ul>
        <form className="project-creation-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.title}
              placeholder="add a title"
              onChange={this.update('title')}
            />
            <input
              type="text"
              value={this.state.short_description}
              placeholder="give a short description"
              onChange={this.update('short_description')}
            />
            <input
              type="text"
              value={this.state.full_description}
              placeholder="give a detailed description"
              onChange={this.update('full_description')}
            />
            <input
              type="text"
              value={this.state.image_url}
              placeholder="please add link to your image"
              onChange={this.update('image_url')}
            />
            <input
              type="text"
              value={this.state.video_url}
              placeholder="please provide a youtube video ID"
              onChange={this.update('video_url')}
            />
            <input
              type="number"
              value={this.state.funding_goal}
              placeholder="What is your funding goal?"
              onChange={this.update('funding_goal')}
            />
            <input
              type="date"
              value={this.state.funding_end_date}
              placeholder="Campaign end date. yearmonthday(20190203)"
              onChange={this.update('funding_end_date')}
            />
            <select
              value={this.state.category}
              onChange={this.update('category')}>
              <option value="tech">technology</option>
              <option value="design">design</option>
              <option value="gadgets">gadgets</option>
            </select>
          <button>Create a Project</button>
        </form>
      </section>
    );
  }
}

export default withRouter(ProjectCreationForm);
