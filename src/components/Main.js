/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import {
    Button,
    View,
    Alert,
}from 'react-native';
import Login from './Login/Login';

export default class Main extends Component{ 
    render(){     
        return(
            <Login onLogin = {this.props.onLogin}/> 
        );
    }
} 