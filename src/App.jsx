import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './flights/components/Home.jsx';
import store from './store.js';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/">
        <Home />
      </Route>
    </Provider>
  </BrowserRouter>
);

export default App;
