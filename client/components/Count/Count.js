import styles from '../../css/global.css';

import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import Counter from './Counter';

import CountStore from '../../stores/CountStores';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Page extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  static getStores() {
    return [CountStore];
  }

  static getPropsFromStores() {
    return CountStore.getState();
  }

  render() {
    return (
      <div>
        <Helmet title="Count"/>
          <section className={styles.section}>
            <Counter count={this.props.counter}/>
          </section>
      </div>
    );
  }
}
