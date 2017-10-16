/**
 * React Native with Github
 * @Lionel Diaz Moron
 */
import {connect} from 'react-redux';
import {viewProfile, updateUserName, updatePassword } from '../actions/loginAction';

import Main from '../components/Main';

const mapStateToProps = (state) =>(
    {   
        nav: state.nav,
        userName: state.userName,
    }
)

const mapDispatchToProps = (dispatch)=>(
    {
        onUserNameUpdate:(value)=>{
            dispatch(updateUserName(value))
        },
        onLogin:()=>{   
            dispatch(viewProfile())
        }
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main)