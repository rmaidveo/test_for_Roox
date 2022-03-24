import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Router as BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchUsers } from './store/api-actions';
import browserHistory from './browser-history';

store.dispatch(fetchUsers())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
