import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/app';
import Dashboard from 'pages/dashboard';

import store from 'models';

ReactDOM.render(
    <Provider store={store}>
      <App>
        <Dashboard />
      </App>
    </Provider>,
    document.getElementById('root')
);
