import {combineReducers} from 'redux';
import counterReducers from './CounterReducer';
import movieReducer from './MovieReducer';
import userReducers from './UserReducer';
import postReducers from './PostReducers';

const rootReducers = combineReducers({
  counterReducers,
  movieReducer,
  userReducers,
  posts: postReducers,
});

export default rootReducers;
