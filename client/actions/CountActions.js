import alt from '../alt/alt';

class CountActions {
  constructor() {
    this.generateActions(
      'increment'
    );
  }
}

export default alt.createActions(CountActions);
