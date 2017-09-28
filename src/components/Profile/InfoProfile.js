import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

const InfoProfile =(props)=>(
    <View style={styles.headerContainer}>
         <Image 
            source={{uri: props.avatar_url}}
            style ={styles.logoImage}
        />
        <Text  style={styles.nameText}>{props.name}</Text>
        <Text style={styles.nameText}>{props.login}</Text>       
    </View>
)

const styles = StyleSheet.create({
    headerContainer:{       
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage:{
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 20,
        borderWidth: 5,
    },
    nameText:{
        fontWeight: 'bold',       
    }
})

export default InfoProfile