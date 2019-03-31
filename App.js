import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import RootNavigator from './navigation/RootNavigator.js';
import {
  createAppContainer
} from 'react-navigation';


const App = createAppContainer(RootNavigator);

export default App