/**
 * React Native App Github
 * @Lionel Diaz Moron
 */

import React, { Component } from 'react';
import {
  AppRegistry, 
} from 'react-native';
import App from './src/App';
export default class Github extends Component {
  render() {
    return (
      <App/>
    );
  }
}
AppRegistry.registerComponent('Github', () => Github);
