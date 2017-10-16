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
        <View style = {styles.viewInside}>
            <Icon name={props.icon} style={[styles.icon, props.selected && styles.selectedLabel]} />
            <Text style = {styles.text}>{props.publicRFF}</Text> 
       </View>          
    </View>
)

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewInside:{
        flexDirection: 'row',
    },
     icon:{
        color: '#bdc3c7',
        fontSize: 25,
        paddingVertical: 0,
        justifyContent:'center',
        alignItems: 'center',
    },
    selectedLabel:{
        color: '#2ecc71',
    },
    text:{
        textAlign: 'center',
        fontWeight: 'bold',      
        marginLeft: 10,
    }
})
export default TabItem
