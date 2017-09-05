/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabItem =(props)=>(
    <View style={styles.container}>
       <Icon name={props.icon} style={styles.icon} />       
    </View>
)

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
     icon:{
        color: '#bdc3c7',
        fontSize: 25,
        paddingVertical: 0,
        justifyContent:'center',
        alignItems: 'center',
    },
})
export default TabItem
