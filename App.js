// base
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

// navigator
import RootNavigator from './navigation/RootNavigator.js';
import {
  createAppContainer
} from 'react-navigation';

//redux
import reducers from './redux/reducers';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducers, middleware);





const AppContainer = createAppContainer(RootNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <AppContainer />
      </Provider>
    );
  }
}