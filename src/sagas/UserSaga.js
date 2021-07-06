import axios from 'axios';
import {all, call, put, takeEvery, takeLatest} from '@redux-saga/core/effects';
import {REQUEST_API_DATA, RECEIVE_API_DATA} from '../actions/actionType';

function* userReceiveAll(action) {
  try {
    const {data} = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users',
    );
    yield put({type: RECEIVE_API_DATA, payload: {users: data}});
  } catch (error) {
    console.log(error.message);
  }
}

export default function* userSendAll() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
