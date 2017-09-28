/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
}from 'react-native';
import TabNavContainer from './TabNavContainer';
import RepoContainer from './RepoContainer';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component{    
    constructor(props){
        super(props);        
    }
    componentDidMount(){
        this.props.onGetProfile();
        this.props.onReposProfile();
    }
    render(){      
       
        return (
            <View style={styles.container}>
                {/* {infoProfile} */}
                {this.props.profile.map((p,i) =>
                    (
                        <View key={i} style={styles.headerContainer}>
                            <Image                                 
                                source={{uri: p.avatar_url}}
                                style ={styles.logoImage}
                            />
                            <Text  style={styles.nameText}>{p.name}</Text>
                            <Text  style={styles.nameText}>{p.login}</Text>                            
                        </View>                        
                    )
                )}                   
                <View style={styles.navigationContainer}>
                     <TabNavContainer />          
                </View>
               {/* {repoContainer} */}
                <ScrollView>                   
                    {this.props.repository.map(repo =>
                        repo.map((r,i)=>(
                            <View key={i} style={styles.containerRepo}>
                                <View style={styles.viewRepo}>
                                    <Icon name="code-fork" style={styles.iconRepo}/>                            
                                    <Text style={styles.repoText}>{r.name}</Text>  
                                </View>
                                <View style={styles.viewRepo}>
                                    <Icon name="circle" style={[styles.iconLanguage,{color:r.language === "C#" ? 'green':'yellow'}]}/>
                                    <Text  style={styles.languageText}>{r.language}</Text>  
                                </View>                                                  
                            </View>
                        ))
                    )}      
                </ScrollView>
            </View>
        );
    }
}

Profile.propTypes = {
    profile: PropTypes.array.isRequired,
    repository: PropTypes.array.isRequired,
    onGetProfile: PropTypes.func.isRequired,
    onReposProfile: PropTypes.func.isRequired,
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
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
        paddingTop:3,
        
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
        marginTop: 1,
        marginBottom: 10,
    },
    containerRepo:{
        flex: 1,      
        marginTop: 5,
        borderWidth:1,
        borderColor: '#2ecc71',
        borderRadius: 5,
    },
    nameText:{
        fontWeight: 'bold',       
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