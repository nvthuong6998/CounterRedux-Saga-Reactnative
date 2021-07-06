import {GET_LIST_POST, GET_LIST_POST_SUCCESS} from './actionType';

export const getListPost = () => {
  return {
    type: GET_LIST_POST,
  };
};

export const getListPostSuccess = payload => {
  return {
    type: GET_LIST_POST_SUCCESS,
    payload,
  };
};
