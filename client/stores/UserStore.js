import alt from '../alt/alt';
import UserActions from '../actions/UserActions';
import SocialAuthActions from '../actions/SocialAuthActions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class UserStore {
  constructor() {
    this.state = {
      user: null || JSON.parse(localStorage.getItem('user')),
      errorMessage: null
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
  signin(response) {
    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
      this.setState({user: response.user, errorMessage: null});
    } else {
      this.setState({errorMessage: response.message});
    }
  }

  @bind(UserActions.signup)
  signup(response) {
    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
      this.setState({user: response.user, errorMessage: null});
    } else {
      this.setState({errorMessage: response.message});
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
