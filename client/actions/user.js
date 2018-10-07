import { ADD_USER, DELETE_USER } from '../constant/user-consts';

export function addUser() {
  return (dispatch, getState) => {
    const username = getState()
      .get('form')
      .get('userform')
      .get('values')
      .get('name');
    const useremail = getState()
      .get('form')
      .get('userform')
      .get('values')
      .get('email');
    dispatch({ type: ADD_USER, payload: { username: username, useremail: useremail } });
  };
}

export function deleteUser(id) {
  return dispatch => {
    dispatch({ type: DELETE_USER, payload: id });
  };
}
