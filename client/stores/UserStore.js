import alt from '../alt/alt';
import UserActions from '../actions/UserActions';
import SocialAuthActions from '../actions/SocialAuthActions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class UserStore {
  constructor() {
    this.state = {
      user: null || JSON.parse(localStorage.getItem('user'))
    };
  }

  @bind(SocialAuthActions.login)
  socilaLogin(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.setState({
      user: user
    });
  }

  @bind(UserActions.signin)
  signin(user) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({
        user: user
      });
    }
  }

  @bind(UserActions.signup)
  signup(user) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({
        user: user
      });
    }
  }

  @bind(UserActions.signout)
  signout() {
    localStorage.clear();
    this.setState({
      user: null
    });
  }
}

export default alt.createStore(UserStore);
