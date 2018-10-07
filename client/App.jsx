import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { configureStore } from './store';
import Header from './components/header/header';
import HomePage from './pages/homepage';
import UserPage from './pages/userspage';
import history from './store/history';

const store = configureStore();
window.store = store;
const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users" component={UserPage} />
        </Switch>
      </Fragment>
    </ConnectedRouter>
  </Provider>
);

export default App;
