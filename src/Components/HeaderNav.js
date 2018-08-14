import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Link, NavLink, withRouter} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SubNav from './SubNav'
import LogInLogOut from './LogInLogOut'

// TODO: restore SubNav if necessary: {(loggedIn) && <SubNav/>} in render/below </Toolbar>


class HeaderNav extends Component {
    constructor(props) {
        super(props)

    }

    state = {
        value: 0
    }

    componentDidMount = ()=>{

        this.updateLocation(this.props.location.pathname)


    }

    updateLocation = (location)=>{

        console.log(`update location called with ${location}`)

        if (location === '/') {
            this.setState(
                (prevState,props)=>{
                    return {value: 0}
                }
            )
        }

        if (location.startsWith('/add')) {
            this.setState(
                (prevState,props)=>{
                    return {value: 1}
                }
            )

        }

        if ((location === '/leaderboard') || (location ==='/leaderboard/')) {
            this.setState(
                (prevState,props)=>{
                    return {value: 2}
                }
            )

        }

    }

    componentDidUpdate = (prevProps) => {


        console.log('old location',prevProps.location.pathname,'new location',this.props.location.pathname)
        console.log('HeaderNave didnav test?', (prevProps.location.pathname !== this.props.location.pathname))
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.updateLocation(this.props.location.pathname)
        }

    }





    handleChange = (event,value) => {
        console.log('handleHomeClickTriggered', event.currentTarget)
        // this.setState({ value });
    };



    render () {
        let loggedIn = (this.props.authedUser)
        return (
            <Fragment>


            <AppBar position='sticky' >

                <Toolbar variant="dense" disableGutters={false}>

                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            <Tab  label="Home" disabled={!loggedIn} component={Link} to={{pathname:'/'}}/>
                            <Tab  label="Post Question" disabled={!loggedIn} component={Link} to={{pathname:'/add'}}/>
                            <Tab  label="LeaderBoard" disabled={!loggedIn} component={Link} to={{pathname:'/leaderboard'}} />
                        </Tabs>
                    <span style={{flexGrow:1}}> </span>
                    <LogInLogOut/>


                </Toolbar>
                {/*TODO: restore SubNav if necessary: {(loggedIn) && <SubNav/>}*/}


            </AppBar>



            </Fragment>




        )
    }
}

export default withRouter(connect((state)=>{return {
     authedUser: state.authedUser
}})(HeaderNav))
// export default  HeaderNav

