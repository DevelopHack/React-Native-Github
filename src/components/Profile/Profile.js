/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
}from 'react-native';
import TabNavContainer from './TabNavContainer';

const logImage = require('../../asset/img/github_icon.png');

export default class Profile extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image 
                        style ={styles.logoImage}
                        source={logImage}
                    />
                    <Text style={styles.headerText}>Lionel Diaz Moron</Text>                     
                </View>
                <View style={styles.navigationContainer}>
                     <TabNavContainer />          
                </View>
                <ScrollView>
                    <View style={styles.repoContainer}>
                        <Text>Repo 1</Text>
                    </View>
                     <View style={styles.repoContainer}>
                        <Text>Repo 1</Text>
                    </View>
                     <View style={styles.repoContainer}>
                        <Text>Repo 1</Text>
                    </View>
                     <View style={styles.repoContainer}>
                        <Text>Repo 1</Text>
                    </View>
                     <View style={styles.repoContainer}>
                        <Text>Repo 1</Text>
                    </View>
                </ScrollView>
            </View>
             
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerContainer:{
       
        backgroundColor: '#2ecc71',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navigationContainer:{
         
        marginTop: 50
    },
    logoImage:{
        width: 80,
        height: 80,
        borderRadius: 40,
        marginTop: 20,
        borderWidth: 5,
    },
    headerText:{
        marginTop: 5,
        marginBottom: 10,
    },
    repoContainer:{
        height: 150,
        borderBottomColor:'#bdc3c7',
        borderBottomWidth: 1,
    }
})