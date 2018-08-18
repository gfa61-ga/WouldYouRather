import React, {Component} from 'react'

import {connect} from 'react-redux'

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import UserChip from './UserChip'

class UserSelect extends Component {



    render () {
        return (
            <Dialog open={this.props.openDialog}>
                <DialogTitle>SIGN IN AS</DialogTitle>
                <div>
                    <List>
                        {
                            Object.keys(this.props.users)
                                .map(u=>{
                                     return (<ListItem key={u}>
                                                <UserChip
                                                    clickable={true}
                                                    user={this.props.users[u]}
                                                />
                                     </ListItem>)
                                })
                        }
                    </List>
                </div>
            </Dialog>
        )
    }
}

export default connect((state)=>{
    return {
        openDialog: state.showSignIn

    }
})(UserSelect)