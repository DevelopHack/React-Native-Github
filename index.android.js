/**
 * React Native App Github
 * @Lionel Diaz Moron
 */

import React, { Component } from 'react';
import {
  AppRegistry, 
} from 'react-native';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import githubReducers from './src/reducers';
import thunk from 'redux-thunk';
import App from './src/App';

let store = createStore(githubReducers, applyMiddleware(thunk))
export default class Github extends Component {
  render() {
    return (
      <Provider store={store}>  
        <App/>
      </Provider> 
    );
  }
}
AppRegistry.registerComponent('Github', () => Github);
