import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Home from './screens/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home>
          
        </Home>
      </View>
    );
  }
}