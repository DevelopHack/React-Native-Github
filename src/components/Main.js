/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import {
    Button,
    View,
}from 'react-native';
import Login from './Login/Login';

export default class Main extends Component{        
    render(){
        const  {navigate} = this.props.navigation;
        return(
            <Login navigate = {navigate} /> 
        );
    }
} 