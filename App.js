import React from 'react';
import {View, Text} from 'react-native';

//Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import CounterContainer from './src/containers/CounterContainer';
import MovieContainer from './src/containers/MovieContainer';

//Redux - saga
import rootReducers from './src/reducers/rootReducers';

// Middleware
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <MovieContainer />
    </Provider>
  );
};

sagaMiddleware.run(rootSaga);
export default App;
