import globalStyles from '../../css/global.css';
import styles from '../../css/Home.css';

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Helmet title="Automate"/>
          <section className={globalStyles.section}>
            <h1>Go to Counter Page</h1>
            <Link to="/count"><button className={styles.limeButton}>Go!</button></Link>
          </section>
      </div>
    );
  }
}
