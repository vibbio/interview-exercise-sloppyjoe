import React from 'react';
import './App.scss';

var Component = React.Component

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = { }
  }

  render() {
    var component = (
      <form className="login-form">
        <div className="login-username">
          <b className="login-label">Username:</b>
          <input type="text" onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
        </div>
        <div className="login-password-label">
          <b className="login-password">Password:</b>
          <div className="login-showpass">Show</div>
          <input type='checkbox' checked={this.state.showpass} onChange={() => this.setState({ showpass: !this.state.showpass })} />
        </div>
        <input type={this.state.showpass ? 'text' : 'password'} value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
        <input type="button" onClick={() => alert('Not Implemented 🦙a')} value="Log In" />
      </form>
    )
    this.state = {
      username: '',
      password: '',
      showpass: false
    }
    return component
  }
}

export default LoginForm

