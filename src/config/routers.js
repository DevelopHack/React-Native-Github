/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Profile from '../components/Profile/Profile';
import Main from '../components/Main';
import ProfileContainer from '../containers/ProfileContainer';

const Nav = StackNavigator({
    Home:{
        screen: Main,
        navigationOptions:  ({
           // title:'CHAT'
            header: null,         
        }),
    },
    Sing: {
        screen: ProfileContainer,
        navigationOptions:  ({
            header: null,          
        }),
    }
   
});

export const AppNavigation =()=>(
    <Nav/>
);
