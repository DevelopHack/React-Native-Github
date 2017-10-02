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
      alert(action.type);
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

function prof(state =[], action){
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
        case 'REPO_ERROR':
            return state;
        default:
            return state;
    }
}

const githubReducers = combineReducers({
    prof,
    repositories,
    nav,
})
export default githubReducers