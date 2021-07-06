import {delay, all, call} from '@redux-saga/core/effects';

import {sayHello, watchIncrement, watchDecrement} from './CounterSagas';
import {watchFetchMovies} from './MoviesSagas'

export default function* rootSaga() {
  yield all([sayHello, watchIncrement(), watchDecrement()]);
  yield call({
    watchFetchMovies
  })
}
