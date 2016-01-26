import styles from '../../css/global.css';

import React from 'react';
import Helmet from 'react-helmet';
import Counter from './Counter';

export default class Page extends React.Component {
  state = {
    counter: 0
  };

  increment = () => this.setState({counter: this.state.counter + 1});

  render() {
    return (
      <div>
        <Helmet title="Count"/>
          <section className={styles.section}>
            <Counter
              count={this.state.counter}
              onIncrement={this.increment}
            />
          </section>
      </div>
    );
  }
}
