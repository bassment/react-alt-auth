import shared from '../../css/shared.css';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

export default class Welcome extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    errorMessage: PropTypes.string
  };

  render() {
    return (
      <div>
        <Helmet title="React-Alt-Auth"/>
          <section className={shared.section}>
            <h1>Welcome!</h1>
            <h5>If you want to Count</h5>
            <Link to="/count">
              <button
                className={shared.primaryButton}>
                Click here!
              </button>
              </Link>
          </section>
      </div>
    );
  }
}
