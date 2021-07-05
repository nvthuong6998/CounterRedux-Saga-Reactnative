import {delay, all} from '@redux-saga/core/effects';

import {sayHello, watchIncrement, watchDecrement} from './CounterSagas';

export default function* rootSaga() {
  yield all([sayHello, watchIncrement(), watchDecrement()]);
}
