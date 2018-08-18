import React, {Component, Fragment} from 'react';

import {connect} from 'react-redux';

import {handleInitialData} from "./Actions";

import {Redirect, Route, Switch, withRouter} from 'react-router-dom'

import HeaderNav from './Components/HeaderNav'
import LeaderBoard from './Components/LeaderBoard'

import AddPoll from './Components/AddPoll'
import ViewOnePoll from './Components/ViewOnePoll'
import Home from './Components/Home'
import NoMatch from './Components/NoMatch'
import PleaseLogIn from './Components/PleaseLogIn'

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


import './App.css';

class App extends Component {

    componentDidMount = () => {
        if (!this.props.authedUser) {
            this.props.dispatch(handleInitialData())
        }
    }

    render() {

        let loggedIn = (this.props.authedUser)
        console.log('*****App RENDER******', loggedIn)

        return (
            <div className="App">
                <Fragment>
                    <HeaderNav/>
                    <Paper style={{
                        marginTop: '20px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        maxWidth: '720px',

                    }}>
                        {
                            (loggedIn)
                                ?
                                <Switch>
                                    <Route exact path='/leaderboard' component={LeaderBoard}/>
                                    <Route exact path='/add' component={AddPoll}/>
                                    <Route path='/questions/:question_id' component={ViewOnePoll}/>
                                    <Route exact path='/' component={Home}/>
                                    <Route component={NoMatch}/>
                                </Switch>
                                :

                                <Fragment>
                                    {((this.props.location.pathname !== '/') && (sessionStorage.user === 'null')) // redirect only on logout
                                        ?
                                        (<Redirect to='/'/>)
                                        :
                                        null
                                    }
                                    <Switch>
                                        <Route exact path='/leaderboard' component={PleaseLogIn}/>
                                        <Route exact path='/add' component={PleaseLogIn}/>
                                        <Route exact path='/' component={PleaseLogIn}/>
                                        <Route component={PleaseLogIn}/>
                                    </Switch>
                                </Fragment>
                        }
                    </Paper>
                </Fragment>
                <footer
                    style={{
                        position: 'fixed',
                        left: '0',
                        bottom: '0',
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: 'gray'
                    }}>
                    <Typography variant='caption'> <a
                        href="https://www.freepik.com/free-vector/funny-people-avatars_844759.htm"
                    >Avatars Designed by Freepik</a></Typography>
                </footer>
            </div>
        );
    }
}

export default withRouter(connect((state) => {
    return {
        authedUser: state.authedUser
    }
})(App));
