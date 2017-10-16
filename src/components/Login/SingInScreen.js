/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class SingInScreen extends Component{    
    render(){
        return (
            <View style={styles.container}>                 
                <TextInput
                    value={this.props.userName}
                    placeholder = "username github"
                    placeholderTextColor = "rgba(255,255,255,0.8)"
                    onChangeText={this.props.onUserNameUpdate}
                    style={styles.textBox}                    
                />                   
                <TouchableOpacity onPress={this.props.onLogin} style= {styles.buttonContainer}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>  
            </View>
        );
    }
}
SingInScreen.propTypes={   
    onLogin: PropTypes.func.isRequired,
    userName: PropTypes.string,   
    onUserNameUpdate: PropTypes.func.isRequired,
}
const styles = StyleSheet.create({
     container:{
        padding: 20,
    },
    textBox:{
       
        marginBottom: 10,
        height: 40,
		color: '#fff',
        paddingHorizontal: 5,
        fontFamily: 'serif',   
    },
    buttonContainer:{
        borderRadius: 40,
        backgroundColor:'#27ae60',
        paddingVertical: 15,
        marginTop: 10,
        marginBottom: 100,
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'serif',
        fontSize: 20,
        fontWeight: '700',
    }
})



