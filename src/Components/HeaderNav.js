import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import LogInLogOut from './LogInLogOut'


class HeaderNav extends Component {
    componentDidMount = () => {

        this.updateLocation(this.props.location.pathname)


    }
    updateLocation = (location) => {


        if (location === '/') {
            this.setState(
                (prevState, props) => {
                    return {value: 0}
                }
            )
        }

        if (location.startsWith('/add')) {
            this.setState(
                (prevState, props) => {
                    return {value: 1}
                }
            )

        }

        if ((location === '/leaderboard') || (location === '/leaderboard/')) {
            this.setState(
                (prevState, props) => {
                    return {value: 2}
                }
            )

        }

    }
    componentDidUpdate = (prevProps) => {


        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.updateLocation(this.props.location.pathname)
        }

    }

    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }

    }

    render() {
        let loggedIn = (this.props.authedUser)
        return (
            <Fragment>


                <AppBar position='sticky'>

                    <Toolbar variant="dense" disableGutters={false}>

                        <Tabs value={this.state.value}>
                            <Tab label="Home" disabled={!loggedIn} component={Link} to={{pathname: '/'}}/>
                            <Tab label="Post Question" disabled={!loggedIn} component={Link} to={{pathname: '/add'}}/>
                            <Tab label="LeaderBoard" disabled={!loggedIn} component={Link}
                                 to={{pathname: '/leaderboard'}}/>
                        </Tabs>
                        <span style={{flexGrow: 1}}> </span>
                        <LogInLogOut/>


                    </Toolbar>


                </AppBar>


            </Fragment>


        )
    }
}

export default withRouter(connect((state) => {
    return {
        authedUser: state.authedUser
    }
})(HeaderNav))


