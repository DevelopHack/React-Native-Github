/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import SingInScreen from './SingInScreen';

const logo = require('../../asset/img/github_icon.png');
export default class Login extends Component{      
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={logo}/>
                    <Text style={styles.title}>Github</Text>
                </View>
                <View >
                    <SingInScreen onLogin = {this.props.onLogin}/>                                  
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2ecc71'
    },
    logoContainer:{        
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    logo:{
        width:100,
        height:100,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
})