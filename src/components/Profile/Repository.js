import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Repository = (props) =>(
    <View style={styles.containerRepo}>
    <View style={styles.viewRepo}>
        <Icon name="code-fork" style={styles.iconRepo}/>                            
        <Text style={styles.repoText}>{props.name}</Text>  
    </View>
    <View style={styles.viewRepo}>
        <Icon name="circle" style={[styles.iconLanguage,{color:props.language === "C#" ? 'green':'yellow'}]}/>
        <Text style={styles.languageText}>{props.language}</Text>  
    </View>                                                  
    </View>
)

const styles = StyleSheet.create({   
    containerRepo:{
        flex: 1,      
        marginTop: 5,
        borderBottomColor: '#7f8c8d',
        borderBottomWidth: 1,       
    },
    iconRepo:{
        color: '#bdc3c7',
        fontSize: 25,
        paddingVertical: 0,
        marginLeft: 10,
        paddingTop: 3,
    },
    iconLanguage:{
        color: '#bdc3c7',
        fontSize: 15,
        paddingVertical: 0,
        marginLeft: 10,
        paddingTop: 3,        
    },
    repoText:{
        fontWeight: 'bold',
        fontSize: 20,   
        marginLeft: 10,    
    },
    languageText:{
        fontSize: 15,
        marginLeft: 10,
    },
    viewRepo:{
        flexDirection: 'row',                
    }
})
export default Repository