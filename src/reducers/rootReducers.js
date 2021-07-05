import {combineReducers} from 'redux';
import counterReducers from './CounterReducer';

const rootReducers = combineReducers({
  counterReducers,
});

export default rootReducers;
