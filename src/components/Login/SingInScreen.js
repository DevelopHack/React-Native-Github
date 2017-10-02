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
                    style={styles.textBox}
                />
                <TextInput
                    value={this.props.password}
                    placeholder = "password"
                    style={styles.textBox}
                    secureTextEntry = {true}
                />           
                <TouchableOpacity onPress={this.props.onLogin} style= {styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>  
            </View>
        );
    }
}
SingInScreen.propTypes={   
    onLogin: PropTypes.func.isRequired,
    userName: PropTypes.string,
    password: PropTypes.string,

}
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



