import {INCREMENT, DECREMENT} from './actionType';

export const increaseAction = step => {
  return {
    type: INCREMENT,
    step: step + 1,
  };
};

export const decreaseAction = step => {
  return {
    type: DECREMENT,
    step: step - 1,
  };
};
