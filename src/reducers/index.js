/**
 * React Native with Github
 * @Lionel Diaz Moron
 */
import {combineReducers} from 'redux';

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
})
export default githubReducers