import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom'

import App from 'containers/app';
import Dashboard from 'pages/dashboard';
import Details from 'pages/dashboard';
import Test from 'pages/test';

import store from 'models';

const appStore = store();

ReactDOM.render(
    <Provider store={appStore}>
      <Test />
    </Provider>,
    document.getElementById('root')
);

/*
      <BrowserRouter history={browserHistory}>
        <Route component={App} path="/" >
          <Route component={Dashboard} path="dashboard" />
          <Route component={Details} path="user/:id" />
        </Route>
      </BrowserRouter> 
*/
