/**
 * React Native with Github
 * @Lionel Diaz Moron
 */
/**
 * This function sends us for the view Profile 
 */
export function viewProfile(){       
    return {
        type: 'SING',               
    }
}
/**
 * This method receives the userName property and updates it.
 * @param {*} userName 
 */
export function updateUserName(userName){
    
    return {
        type: 'UPDATE_USERNAME',
        userName,
    }
}

