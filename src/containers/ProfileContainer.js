/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import {connect} from 'react-redux';

import {yourPofile,reposProfile} from '../actions';

import Profile from '../components/Profile/Profile';

const mapStateToProps = (state)=>(
    {
        profile: state.prof,
        repository: state.repositories,
    }
)

const mapDispatchToProps=(dispatch)=>(
    {
        onGetProfile: ()=>{           
            dispatch(yourPofile())
        },
        onReposProfile: ()=>{
            dispatch(reposProfile())
        }
    }
)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile)