import React, {Component, Fragment} from 'react'
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import Chip from '@material-ui/core/Chip';
import {SET_AUTHED_USER,setAuthedUser} from '../Actions'
import UserSelect from './UserSelect'
import {showSignIn} from "../Actions";
import UserChip from './UserChip'


class LogInLogOut extends Component {



    logInlogOut = (user)=>{

        if (this.props.authedUser) { // USER LOGGED IN, SHOULD LOG OUT
            this.props.dispatch(setAuthedUser(null))

        } else { // LOGGED OUT, SHOULD LOG IN


            this.props.dispatch(showSignIn(true))




        }

    }

    render () {
        let authedUser = this.props.authedUser;
        return (

            <Fragment>
                {
                    authedUser ? <UserChip user={this.props.users[authedUser]} /> : <span></span>
                }
                <span style={{
                    width: '20px'
                }}/>
                <Button onClick={this.logInlogOut} variant='raised' color='secondary'> { authedUser ? 'Logout' : 'Login'} </Button>
                <UserSelect  users={this.props.users}/>


            </Fragment>



        )
    }
}

export default connect((state)=>{
    return {
        authedUser: state.authedUser,
        users: state.users,
    }
})(LogInLogOut)