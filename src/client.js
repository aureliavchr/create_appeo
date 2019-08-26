import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import counter from './reducers/counter'
import { createStore } from 'redux';
  
const store = createStore(counter);

hydrate(
  <Provider store={store}>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>,
    document.getElementById('root')
  
  
);

if (module.hot) {
  module.hot.accept();
}

