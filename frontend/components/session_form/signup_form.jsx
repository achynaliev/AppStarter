import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearSessionErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleDemoLogin(e) {
    this.props.processLogin({username: 'atai', password: 'password' })
  }

  render() {
    return (
      <div className="grey-background-body">
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit} className="sign-form-box">
            <h3>Sign up</h3>
            <br/>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="signup-input"
                  placeholder="Username"
                />
              </label>
              <br/>
              <label>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className='signup-input'
                  placeholder="Email"
                  />
              </label>
              <br/>
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signup-input"
                  placeholder="Password"
                />
              </label>
              <br/>
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
          <h6>or</h6>
          <br/>
            <div className="demologin">
              <button onClick={this.handleDemoLogin}>Demo login</button>
            </div>
            <div className="signup_link_login">Have an account? {this.props.navLink}</div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
