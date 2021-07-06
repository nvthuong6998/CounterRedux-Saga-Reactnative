import React from 'react';
import {View, Text} from 'react-native';

//Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import CounterContainer from './src/containers/CounterContainer';
import MovieContainer from './src/containers/MovieContainer';
import UserContainer from './src/containers/UserContainer';
import PostContainer from './src/containers/PostContainer';

//Redux - saga
import rootReducers from './src/reducers/rootReducers';
import logger from 'redux-logger';
// Middleware
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './src/sagas/rootSaga';
import postSaga from './src/sagas/PostSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <PostContainer />
    </Provider>
  );
};

sagaMiddleware.run(postSaga);
export default App;
