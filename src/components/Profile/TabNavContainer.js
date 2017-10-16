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
import PropTypes from 'prop-types';

const TabNavContainer = (props) =>(
  <Tabs
    style={styles.tabContainer}    
    selected = {props.selectedService}
    onSelect = {comp=>{
      props.onTabChange(comp.props.name)
    }} 
  >
      <TabItem publicRFF = {props.publicRFF[0]} name = "repositories" label="Repositories" icon="code-fork"/>
      <TabItem publicRFF = {props.publicRFF[2]} name = "followers" label="Followers" icon="users"/>
      <TabItem publicRFF = {props.publicRFF[1]} name = "following" label="Following" icon="user"/>      
  </Tabs>
)
TabNavContainer.propTypes = {
  onTabChange: PropTypes.func.isRequired,
  selectedService: PropTypes.string.isRequired,
}
const styles = StyleSheet.create({
   tabContainer:{
    borderBottomColor:'#bdc3c7',
    borderBottomWidth: 1,
  }
})
export default TabNavContainer