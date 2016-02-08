import shared from '../../css/shared.css';
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
       <h5>Click the button to increment the counter</h5>
       <button className={styles.primaryButton} onClick={this.increment}>Click!</button>
       <p>
         <Link to="/"><button className={shared.button}>Go Home</button></Link>
         <Link to="/login"><button className={shared.button}>Go Login</button></Link>
       </p>
     </div>
   );
  }
}
