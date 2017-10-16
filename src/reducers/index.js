/**
 * React Native with Github
 * @Lionel Diaz Moron
 */
import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { AppNav } from '../config/routers';

// Start with two routes: The Main screen, with the Sing screen on top.

const firstAction = AppNav.router.getActionForPathAndParams('Sing');
const tempNavState = AppNav.router.getStateForAction(firstAction);
const secondAction = AppNav.router.getActionForPathAndParams('Main');
const initialNavState = AppNav.router.getStateForAction(  
  tempNavState,
  secondAction
);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
      case 'Main': 
        nextState = AppNav.router.getStateForAction(
          NavigationActions.back(),         
          state
        );
        break;
      case 'SING':       
        nextState = AppNav.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Sing' }),
          state
        );
        break;
      default:
        nextState = AppNav.router.getStateForAction(action, state);
        break;
    }
  
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
  }

function userName(state='',action){
    switch(action.type){
        case 'UPDATE_USERNAME':            
            return action.userName;
        default:
            return state;
    }
}

function profile(state =[], action){
    switch(action.type){
        case 'FETCH_SUCCESS':                   
            return [ ...state, action.payload];
        case 'RECIEVE_GET':           
            return [...state, action.json];  
        default:
            return state;
    }
}

function repositories(state = [], action){    
    switch(action.type){
        case 'RECEIVE_REPOS':            
            return  [...state, action.repoJson];               
        case 'PROFILE_ERROR':            
            return state;
        default:
            return state;
    }
}

function totalRepositories(state = '', action){    
    switch(action.type){
        case 'NUMBER_REPOSITORIES':            
            return action.numberRepo;
        default:            
            return state;
    }
}

function totalFollowing(state = '', action){
    switch(action.type){
        case 'NUMBER_FOLLOWING':
            return action.jsonFollowing;
        default:
            return state;
    }
}

function totalFollowers(state = '', action){
    switch(action.type){
        case 'NUMBER_FOLLOWERS':
            return action.jsonFollowers;
        default:
            return state;
    }
}

function followers(state = [], action){
    switch(action.type){
        case 'RECEIVE_FOLLOWERS':
            return [...state, action.jsonFollowers];
        default:
            return state;
    }
}

function following(state = [], action){
    switch(action.type){
        case 'RECEIVE_FOLLOWING':
            return [...state, action.jsonFollowing]
        default:
            return state;
    }
}

const githubReducers = combineReducers({
    nav,
    userName,
    repositories,
    profile,
    totalRepositories,
    totalFollowers,
    totalFollowing,
    followers,
    following,
})
export default githubReducers