/**
 * React Native Github
 * @Lionel Diaz Moron
 */
export function receiveRepositories(json){    
    return {
        type: 'RECIEVE_GET',        
        json,
    }
}
export function fetchError(){
  return {
    type: 'PROFILE_ERROR',
  }
}
export function numberFollowers(jsonFollowers){
    return{
        type: 'NUMBER_FOLLOWERS',
        jsonFollowers,
    }
}
export function numberFollowing(jsonFollowing){
    return{
        type: 'NUMBER_FOLLOWING',
        jsonFollowing,
    }
}
export function numberRepositories(numberRepo){    
    return {
        type: 'NUMBER_REPOSITORIES',
        numberRepo,
    }
}
/**
 * This function return a Json object with the information about the user
 */
export function yourPofile(){
    return (dispatch, getState) =>{
       //With the getState() method, we get the value of the userName property.
       const user = getState().userName;        
       try {
          const urlPart = 'https://api.github.com/users/';          
          fetch(urlPart+user)
              .then(response=>response.json())
              .then((responseJson) => 
                 {
                    dispatch(numberRepositories(responseJson.public_repos));
                    dispatch(receiveRepositories(responseJson));
                    dispatch(numberFollowers(responseJson.followers));
                    dispatch(numberFollowing(responseJson.following)); 
                    dispatch(getFollower(responseJson.followers_url));
                    dispatch(getFollowing(responseJson.following_url))
                 }        
               )
        } catch (e) {            
            dispatch(fetchError())           
        }
    }
}
/**
 * This function received a Json object with each repository existing. 
 * @param {*} repoJson 
 */
export function recieveRepos(repoJson){
    return {
        type: 'RECEIVE_REPOS',
        repoJson,
    }
}
export function reposError(){
    return {
        type: 'REPO_ERROR'
    }
}
/**
 * This function return a Json object with all the repository for the user
 */
export function reposProfile(){
    return (dispatch, getState) =>{
        const user = getState().userName;   
         
        try {
            const url = 'https://api.github.com/users/'+user+'/repos';
            
            fetch(url)
                .then(response=>response.json())
                .then((responseJson)=>dispatch(recieveRepos(responseJson)))
        } catch (e) {
            dispatch(reposError())
        }
    }
}

/**
 * This function received a Json object with each follower existing.
 * @param {*} jsonFollowers 
 */
export function receiveFollowers(jsonFollowers){
    return {
        type: 'RECEIVE_FOLLOWERS',
        jsonFollowers,
    }
}

/**
 * This function return a Json object with all the followers for the user
 * @param {*} url 
 */
export function getFollower(url){    
    return dispatch =>{
        try {
            fetch(url)
                .then(response => response.json())
                .then((responseJson) => dispatch(receiveFollowers(responseJson)))
        } catch (error) {
            dispatch(reposError())
        }
    }
}

/**
 * This function received a json object with each following existing.
 * @param {*} jsonFollowing 
 */
export function receivedFollowing(jsonFollowing){
    return {
        type: 'RECEIVE_FOLLOWING',
        jsonFollowing,
    }
}

/**
 * This function return a json object with all the following for the user.
 * @param {*} url 
 */
export function getFollowing(url){
    let newUrl = url.split("{");
    return dispatch => {
        try{
            fetch(newUrl[0])
                .then(response => response.json())
                .then((responseJson) => dispatch(receivedFollowing(responseJson)))
        }
        catch(error){
            dispatch(reposError());
        }
    }
}