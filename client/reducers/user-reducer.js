import { List } from 'immutable';
import { ADD_USER, DELETE_USER } from '../constant/user-consts';

const initialState = List([]);

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return state.push(action.payload);
    case DELETE_USER:
      return state.delete(action.payload);
    default:
      return state;
  }
}
