import React, {Component, Fragment} from 'react'

import {connect} from 'react-redux'

import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';



class PleaseLogIn extends Component {



    render() {

        const {signedIn} = this.props
        return (
            <Fragment>
                {

                    (!signedIn) // show sign in only if user logged of session
                        ?
                        <SnackbarContent
                            style={{
                                maxWidth: '100%'
                            }}
                            message={
                                <Button

                                    color='secondary'>
                                    Please Log In before playing
                                </Button>
                            }/>
                        : null
                }
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        signedIn: (authedUser) ? true : false
    }
}

export default connect(mapStateToProps)(PleaseLogIn)