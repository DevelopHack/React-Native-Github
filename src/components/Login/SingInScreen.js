/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const SingInScreen =(props)=>(
    <View style={styles.container}>                 
        <TextInput
            placeholder = "username github"
            style={styles.textBox}
        />
        <TextInput
            placeholder = "password"
            style={styles.textBox}
        />
        <TouchableOpacity style= {styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
   </View>
)

const styles = StyleSheet.create({
     container:{
        padding: 20
    },
    textBox:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        marginBottom: 10,
        height: 40,
		color: '#4ba3c9',
		borderWidth: 1,
		borderColor: '#27ae60',
		borderRadius: 5,
		paddingHorizontal: 5,        
    },
    buttonContainer:{
        borderRadius: 5,
        backgroundColor:'#27ae60',
        paddingVertical: 15,
        marginTop: 10,
        marginBottom: 15
    },
    buttonText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight:'700'
    }
})
export default SingInScreen

