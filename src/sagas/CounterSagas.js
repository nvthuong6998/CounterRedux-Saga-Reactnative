import {INCREMENT, DECREMENT} from '../actions/actionType';
import {takeEvery, put} from '@redux-saga/core/effects';

export function* sayHello() {
  console.log('Hello');
}

function* increment() {
  console.log('This is increment saga');
}

export function* watchIncrement() {
  yield takeEvery(INCREMENT, increment);
}

function* decrement() {
  console.log('This is decrement saga');
}

export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrement);
}
