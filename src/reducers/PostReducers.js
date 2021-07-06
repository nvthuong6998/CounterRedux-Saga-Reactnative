import {GET_LIST_POST, GET_LIST_POST_SUCCESS} from '../actions/actionType';

const INITIAL_STATE = {
  posts: [],
  load: false,
};

const postReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LIST_POST:
      return {
        ...state,
        load: true,
      };
    case GET_LIST_POST_SUCCESS:
      return {
        ...state,
        posts: action.data,
        load: false,
      };

    default:
      return state;
  }
};

export default postReducers;
