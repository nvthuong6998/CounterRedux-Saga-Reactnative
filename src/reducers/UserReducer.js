import {REQUEST_API_DATA} from '../actions/actionType';

const userReducers = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return action.payload.users;
    default:
      return state;
  }
};

// const userReducers = (state = {}, action) => {
//     switch(action.type){
//         case REQUEST_API_DATA:
//             return action.payload.users
//         default:
//             return state,
//     }
// }

export default userReducers;
