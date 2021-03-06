import {INCREMENT, DECREMENT} from '../actions/actionType';

const counterReducers = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.step;
    case DECREMENT:
      return state - action.step;
    default:
      return state;
  }
};

export default counterReducers;
