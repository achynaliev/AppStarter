import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
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

  handleDemoLogin(e) {
    this.props.processForm({username: 'atai', password: 'password' })
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

  render() {
    return (
      <div className="grey-background-body">
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h3>Log in</h3>
            <br/>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />
              </label>
              <br/>
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
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
          <div className="login_link_singup">New to AppStarter? {this.props.navLink}</div>
        </div>
    </div>
    );
  }
}

export default LoginForm;
