export function receiveGet(json){    
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
export function yourPofile(){
    return dispatch =>{
       try {
          const url = 'https://api.github.com/users/DevelopHack';
          fetch(url)
              .then(response=>response.json())
              .then((responseJson) => dispatch(receiveGet(responseJson)))
        } catch (e) {
            dispatch(fetchError())           
        }
    }
}
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
export function reposProfile(){
    return dispatch =>{
        try {
            const url = 'https://api.github.com/users/DevelopHack/repos';
            fetch(url)
                .then(response=>response.json())
                .then((responseJson)=>dispatch(recieveRepos(responseJson)))
        } catch (e) {
            dispatch(reposError())
        }
    }
}