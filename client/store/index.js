import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import { rootReducer } from './reducers';
import history from './history';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = Map();
export function configureStore() {
  return createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  );
}
