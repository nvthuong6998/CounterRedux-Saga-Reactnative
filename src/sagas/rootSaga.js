import {delay, all, call} from '@redux-saga/core/effects';

import {sayHello, watchIncrement, watchDecrement} from './CounterSagas';
import {watchFetchMovies} from './MoviesSagas';
import {userSendAll} from './UserSaga';
import postSaga from './PostSaga';

export default function* rootSaga() {
  yield all([
    sayHello,
    watchIncrement(),
    watchDecrement(),
    userSendAll(),
    postSaga(),
  ]);
  yield call({
    watchFetchMovies,
  });
}
