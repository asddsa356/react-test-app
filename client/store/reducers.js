import { combineReducers } from 'redux-immutablejs';
import { reducer as formReducer } from 'redux-form/immutable';
import user from '../reducers/user-reducer';

export const rootReducer = combineReducers({
  user,
  form: formReducer
});
