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
import Repository from './Repository';
import Follower from './Follower';
import Following from './Following';
import Message from './Message';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends Component{   
    constructor(props){
        super(props)

        this.state = {
            selectedService: 'repositories',
            services: [
                {key: 'repositories'},
                {key: 'followers'},
                {key: 'following'},
            ]
        }
        this._switchService = this._switchService.bind(this);
    }
    
    /**
     * This function changes each service, where the services are repositories, followers, and following.
     * @param {*} nextService 
     */
    _switchService(nextService){
        this.setState({selectedService: nextService});
    }
    /**
     *  This function allows you to render of component Repository, Follower, and Following.
     * @param {*} services 
     * @param {*} selected
     */
    _renderTab(services, selected){       
        const thisService = services.find(s => s.key === selected);
        if (thisService.key === "repositories")
        {
            if(this.props.numberRepository != 0)
            {
                const rep = this.props.repository.map(
                    repo => repo.map((r,i) =><Repository {...r} key = {i} />)
                )
                return (
                    rep
                );
            }
            else
            {
                return( <Message message = {thisService.key} />);
            }
        }
        if (thisService.key === "followers")
        {   
            if(this.props.numberFollowers != 0)
            {
                const followers = this.props.followers.map(
                    foll => foll.map((f,i) => <Follower {...f} key = {i}/>)
                )
                return (
                    followers
                );
            }
            else
            {
                return( <Message message = {thisService.key}/> );
            }
        }
        if (thisService.key === "following")
        {   
            if(this.props.numberFollowing != 0)
            {
                const following = this.props.following.map(
                    foll => foll.map((f, i) => <Following {...f} key = {i}/>)
                )
                return (
                    following
                );
            }
            else
            {
                return( <Message message = {thisService.key} />);
            }
        }
        
    }
    /**
     * This function is executed automatically when the view is load
     */
    componentDidMount(){
        this.props.onGetProfile();
        this.props.onReposProfile();             
    }
    render(){              
        return (
            <View style={styles.container}>               
                {this.props.profile.map((p,i) =>
                    (
                        <View key = {i} style = {styles.headerContainer}>
                            <View style = {styles.viewImage}>
                                <Image                                 
                                    source={{uri: p.avatar_url}}
                                    style ={styles.logoImage}
                                />
                            </View>
                            <View style = {styles.viewText}>
                                <Text  style = {styles.nameText}>{p.name}</Text>
                                <Text style = {styles.loginText}  >{p.login}</Text>                            
                            </View>
                        </View>                                           
                    )
                )}                   
                <View style={styles.navigationContainer}>
                    <TabNavContainer 
                        selectedService = {this.state.selectedService}
                        onTabChange = {this._switchService}
                        publicRFF = {[this.props.numberRepository, this.props.numberFollowing, this.props.numberFollowers]}
                     />                         
                </View>              
                <ScrollView> 
                    {this._renderTab(this.state.services, this.state.selectedService)}
                </ScrollView>
            </View>
        );
    }
}

Profile.propTypes = {
    profile: PropTypes.array.isRequired,
    repository: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    onGetProfile: PropTypes.func.isRequired,
    onReposProfile: PropTypes.func.isRequired,   
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },
    viewImage:{
        padding: 20,
    },
    viewText: {
        padding: 20,        
    },
    headerContainer:{       
        backgroundColor: '#2ecc71',
        flexDirection: 'row',       
    },
    navigationContainer:{
        marginTop: 50,
    },   
    logoImage:{
        width: 80,
        height: 80,
        borderRadius: 40,       
        borderWidth: 5,
    },
    nameText:{
        fontWeight: 'bold',
        fontFamily: 'serif',
        fontSize: 30,        
    },
    loginText:{
        fontFamily: 'serif',
        fontSize: 17,
    },
})