import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
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




class HeaderNav extends Component {
    constructor(props) {
        super(props)


    }





    handleHomeClick = event => {
        console.log('handleHomeClickTriggered', event.currentTarget)
        this.setState({ anchorEl: event.currentTarget });
    };



    render () {
        let loggedIn = !(this.props.authedUser)
        return (
            <Fragment>


            <AppBar position='sticky' >

                <Toolbar variant="dense" disableGutters={false}
                    // style={{position:"top"}}
                >

                        <Tabs  value={null}>
                            <Tab onClick={this.handleHomeClick} disabled={loggedIn} label="Home"></Tab>
                            <Tab label="Post Question" disabled={loggedIn}/>
                            <Tab label="LeaderBoard" disabled={loggedIn}/>
                        </Tabs>
                    <span style={{flexGrow:1}}> </span>
                    <LogInLogOut/>


                </Toolbar>
                {(!loggedIn) && <SubNav/>}

            </AppBar>



            </Fragment>




        )
    }
}

export default connect((state)=>{return {
     authedUser: state.authedUser
}})(HeaderNav)
// export default  HeaderNav

