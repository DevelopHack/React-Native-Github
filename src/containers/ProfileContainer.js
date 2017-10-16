/**
 * React Native App Github
 * @Lionel Diaz Moron
 */
import {connect} from 'react-redux';
import {yourPofile,reposProfile} from '../actions/profileAction';
import Profile from '../components/Profile/Profile';

const mapStateToProps = (state)=>(
    {
        /**
         * these are array
         */
        profile: state.profile,
        repository: state.repositories,
        followers: state.followers,
        following: state.following,
        /**
         * these are number
         */
        numberRepository: state.totalRepositories,
        numberFollowing: state.totalFollowing,
        numberFollowers: state.totalFollowers,
       
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