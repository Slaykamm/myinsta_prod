import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom';

import { store } from './redux/reducers/index'


ReactDOM.render(

  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>  
  </HashRouter>,
  document.getElementById('root')
);
