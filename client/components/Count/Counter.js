import styles from '../../css/Counter.css';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import CountActions from '../../actions/CountActions';

export default class Counter extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  };

  increment = () => CountActions.increment();

  render() {
    return (
     <div>
       <h1>Count: {this.props.count}</h1>
       <p>Click the button to increment the counter</p>
       <button className={styles.squareButton} onClick={this.increment}>Click!</button>
       <Link to="/"><button className={styles.squareButton}>Go Home</button></Link>
     </div>
   );
  }
}
