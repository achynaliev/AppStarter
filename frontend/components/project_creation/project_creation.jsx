import React from 'react';

import { withRouter } from 'react-router-dom';

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
      video_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.myrender()
    sleep(2000);
    this.props.history.push('/login')
  }

  // myrender() {
  //   return (
  //     <div>
  //       <h1>HELLLO</h1>
  //     <dvi>
  //   );
  // };

  render() {
    return (
      <section className="project-creation-main">
        {this.props.currentUser ? (null) : (this.redirect())}
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
          <button>Create a Project</button>
        </form>
      </section>
    );
  }
}

export default withRouter(ProjectCreationForm);

// <select
//   value={this.state.short_description}
//   onChange={this.update('short_description')}
//   defaultValue="Select Pokemon Type"
// >
//   {POKEMON_TYPES.map((type, i) => {
//     return <option value={type} key={i}>{type}</option>;
//   })}
// </select>

// <div className="project-creation-q1">
//   <h1>We see Appstarter as a home for
//     creative minds and a wonderful platform; where people who believe,
//     respect, and see the vision can support an idea and make it a reality.</h1>
//   <h2>— ATAI CHYNALIEV</h2>
// </div>
