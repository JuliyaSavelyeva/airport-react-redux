import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './tasks/components/TodoList.jsx';
import Test from './tasks/components/Test.jsx';
import store from './store.js';

const App = () => (
  <Provider store={store}>
    <TodoList />
    <Test />
  </Provider>
);

export default App;
