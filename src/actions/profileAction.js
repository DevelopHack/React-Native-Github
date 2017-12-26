/**
 * @description Action types
 */
export const REPOSITORIES = 'REPOSITORIES'
export const NUMBER_FOLLOWERS = 'NUMBER_FOLLOWERS'
export const NUMBER_FOLLOWING = 'NUMBER_FOLLOWING'
export const NUMBER_REPOSITORIES = 'NUMBER_REPOSITORIES'

/**
 * @description Action creators 
 */

export function receiveRepositories(json){    
    return {
        type: REPOSITORIES,        
        json
    }
}
export function numberFollowers(jsonFollowers){
    return{
        type: NUMBER_FOLLOWERS,
        jsonFollowers
    }
}
export function numberFollowing(jsonFollowing){
    return{
        type: NUMBER_REPOSITORIES,
        jsonFollowing
    }
}
export function numberRepositories(numberRepo){    
    return {
        type: NUMBER_REPOSITORIES,
        numberRepo
    }
}
/**
 * This function received a Json object with each repository existing. 
 * @param {*} repoJson 
 */
export function recieveRepos(repoJson){
    return {
        type: 'RECEIVE_REPOS',
        repoJson
    }
}
export function reposError(){
    return {
        type: 'REPO_ERROR'
    }
}
/**
 * This function received a Json object with each follower existing.
 * @param {*} jsonFollowers 
 */
export function receiveFollowers(jsonFollowers){
    return {
        type: 'RECEIVE_FOLLOWERS',
        jsonFollowers
    }
}
/**
 * This function received a json object with each following existing.
 * @param {*} jsonFollowing 
 */
export function receivedFollowing(jsonFollowing){
    return {
        type: 'RECEIVE_FOLLOWING',
        jsonFollowing
    }
}

