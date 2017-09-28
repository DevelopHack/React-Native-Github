import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native';

const RepoContainer = (props) =>{
    // <ScrollView>
        <View style={styles.repoContainer}>
            <Text>{props.name}</Text>
        </View>                       
    // </ScrollView>
}

const styles = StyleSheet.create({
    repoContainer:{
        height: 150,
        borderBottomColor:'#bdc3c7',
        borderBottomWidth: 1,
    },
})
export default RepoContainer