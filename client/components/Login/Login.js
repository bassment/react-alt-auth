import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import UserActions from '../../actions/UserActions';

export default class Login extends React.Component {
  static propTypes = {
    user: PropTypes.object
  };

  signin = () => {
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    UserActions.signin(username, password);
  };

  signup = () => {
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    UserActions.signup(username, password);
  };

  signout = () => UserActions.signout();

  render() {
    if (this.props.user) {
      return (
        <div className="row">
          <p>Hi {this.props.user.username}!</p>
          <p><button onClick={this.signout}>Sign Out</button></p>
        </div>
      );
    }

    return (
      <div className="row">
        <p><input type="text" className="u-full-width" placeholder="Username" ref="username" /></p>
        <p><input type="password" className="u-full-width" placeholder="Password" ref="password" /></p>
        <p>
          <button onClick={this.signin}>Sign In</button>
        </p>
      </div>
    );
  }
}
