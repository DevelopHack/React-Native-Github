import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Message = (props) =>(
    <View style = {styles.containerView}>
        <Text style = {styles.text}>You do not have {props.message}</Text>
    </View>
)

const styles = StyleSheet.create({
    containerView: {        
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,               
    },
    text: {
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginTop: 180,
        opacity: 0.5,
        textAlign: 'center',
    }
})
export default Message