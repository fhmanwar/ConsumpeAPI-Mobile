import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import RootStack from './src/routes/stack';
import Home from './src/screens/home';

export default class App extends Component {
  state = {
    // loading: false
    loading: true
  }
  render() {
    if (this.state.loading) {
      return (
        // <Home />
        <RootStack />
      );
    } else {
      return (
        <AppLoading />
      );
    }
  }
}
