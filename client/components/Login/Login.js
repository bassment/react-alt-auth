import shared from '../../css/shared.css';

import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import LoginForm from './LoginForm';

import UserStore from '../../stores/UserStore';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Home extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    errorMessage: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    return UserStore.getState();
  }

  render() {
    return (
      <div>
        <Helmet title="Login"/>
          <section className={shared.section}>
            <LoginForm user={this.props.user} error={this.props.errorMessage}/>
          </section>
      </div>
    );
  }
}
