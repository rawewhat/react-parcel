import { SAMPLE_ACTION } from ".."

const INITIAL_STATE = {
  sample: ""
};

export default (state = INITIAL_STATE, action) => {
  // noinspection JSRedundantSwitchStatement
  switch (action.type) {
    case SAMPLE_ACTION:
      return state;
    default:
      return state;
  }
}