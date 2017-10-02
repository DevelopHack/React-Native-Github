/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator } from 'react-navigation';

//import Main from '../components/Main';
import MainContainer from '../containers/MainContainer';
import ProfileContainer from '../containers/ProfileContainer';

export const AppNav = StackNavigator({
    Home:{
        screen: MainContainer,
        navigationOptions:({
            header: null,         
        }),
    },
    Sing: {
        screen: ProfileContainer,
        navigationOptions:({
            header: null,          
        }),
    }
});

const AppNavigation =({dispatch, nav})=>(
    <AppNav navigation={addNavigationHelpers({dispatch, state: nav})}/>
);
const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigation);

