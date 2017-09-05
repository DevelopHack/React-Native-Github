/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
}from 'react-native';
import Tabs from 'react-native-tabs';
import TabItem from './TabItem';

const TabNavContainer = (props) =>(
  <Tabs
    style={styles.tabContainer}    
    selectedStyle={{color:'red'}} 
  >
      <TabItem label="Repositories" icon="code-fork"/>
      <TabItem label="Followers" icon="users"/>
      <TabItem label="Following" icon="user"/>
  </Tabs>
    
        
     
)
const styles = StyleSheet.create({
   tabContainer:{
    borderBottomColor:'#bdc3c7',
    borderBottomWidth: 1,
  }
})
export default TabNavContainer