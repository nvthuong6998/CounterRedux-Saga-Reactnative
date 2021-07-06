import {GET_LIST_POST, GET_LIST_POST_SUCCESS} from '../actions/actionType';
import {takeLatest, call, put} from '@redux-saga/core/effects';
import axios from 'axios';
import {getListPostSuccess} from '../actions/PostActions';

const url = 'https://jsonplaceholder.typicode.com/posts';
function* getData() {
  const response = yield axios.get(url);
  if (response.status == 200) {
    const data = response.data;
    return data;
  }
}

function* getListPostSaga() {
  try {
    const data = yield getData();
    console.log('id:');
    data.map(ele => console.log(ele.id));
    yield put({type: GET_LIST_POST_SUCCESS, data: data});
  } catch (error) {
    console.log(error);
  }
}

function* postSaga() {
  yield takeLatest(GET_LIST_POST, getListPostSaga);
}
export default postSaga;
