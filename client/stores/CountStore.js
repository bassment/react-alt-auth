import alt from '../alt/alt';
import CountActions from '../actions/CountActions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class CountStore {
  constructor() {
    this.state = {
      counter: 0
    };
  }

  @bind(CountActions.increment)
  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

export default alt.createStore(CountStore);
