import {combineReducers} from 'redux';
import counterReducers from './CounterReducer';
import movieReducer from './MovieReducer';

const rootReducers = combineReducers({
  counterReducers, movieReducer
});

export default rootReducers;
