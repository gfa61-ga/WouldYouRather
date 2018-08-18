import React, {Component, Fragment} from 'react'

import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';

class PleaseLogIn extends Component {
    render() {
        return (
            <Fragment>
                {
                    (!(typeof sessionStorage.user) || (sessionStorage.user === 'null')) // show sign in only if user logged of session
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

export default PleaseLogIn