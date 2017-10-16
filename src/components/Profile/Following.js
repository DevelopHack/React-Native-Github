import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

const Following = (props) => (
    <View style = {styles.containerView}>
        <Image                                 
            source={{uri: props.avatar_url}}
            style ={styles.avatarFollowers}
        />
        <Text style = {styles.textLogin}>{props.login}</Text>
    </View>
)

const styles = StyleSheet.create({
    containerView:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#a9a9a9',
    },
    avatarFollowers:{
        width: 40,
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 2.5,
        marginLeft: 10,
        marginBottom: 10,
    },
    textLogin:{
        fontFamily: 'serif',
        color: '#000000',
        fontSize: 20,
        marginLeft: 5,
        padding: 12.5,
    },
})

export default Following