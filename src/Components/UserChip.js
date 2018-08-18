import React, {Component} from 'react';

import {connect} from 'react-redux';

import {setAuthedUser, showSignIn} from "../Actions";

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


class UserChip extends Component {
    handleClick = (u)=>{
        this.props.dispatch(setAuthedUser(this.props.user.id))
        this.props.dispatch(showSignIn(false))
    }

    render () {

        let user = this.props.user

        if (user)
            return (
                <Chip
                    style={{
                        width: '150px',
                        padding: '2px'
                    }}
                    onClick={this.props.clickable ? this.handleClick : null}
                    avatar={<Avatar src={user.avatarURL}/>}
                    label={user.id}
                />
            )
        else return (
            null
        )
    }

}
export default connect((state)=>{
    return {

    }
})(UserChip)