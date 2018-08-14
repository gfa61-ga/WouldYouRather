import React, {Component, Fragment} from 'react';
import {handleInitialData} from "./Actions";
import {connect} from 'react-redux'
import {withRouter, Route, BrowserRouter, Switch} from 'react-router-dom'
import LeaderBoard from './Components/LeaderBoard'
import AddPoll from './Components/AddPoll'
import Home from './Components/Home'
import NoMatch from './Components/NoMatch'
import PleaseLogIn from './Components/PleaseLogIn'
import './App.css';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import HeaderNav from './Components/HeaderNav'






class App extends Component {
    constructor(props) {
        super(props)


    }

    componentDidMount = ()=>{

        console.log('*****APP COMPONENT DID MOUNT*******')
        if(!this.props.authedUser) {
            console.log('*****APP COMPONENT DISPATCHING HANDLEINTITALDATA*******')
            this.props.dispatch(handleInitialData())
        }
    }



    spitShit = () => {

            let myList = []
            for (let i=0;i<100;i++) {
                myList.push(<p key={i}> for generated p {i}</p>)
            }
            return myList
        
    }
  render() {
      let loggedIn = (this.props.authedUser)
    return (
      <div className="App">
          <BrowserRouter>
              <Fragment>
                  <HeaderNav/>
                  <Paper style={{
                      margin: '20px'

                  }} >
                      {
                           (loggedIn)
                              ?
                              <Switch>
                                  <Route exact path='/leaderboard' component={LeaderBoard}/>
                                  <Route exact path='/add' component={AddPoll}/>
                                  <Route exact path='/' component={Home}/>
                                  <Route component={NoMatch}/>
                              </Switch>
                              :
                              <Switch>
                                  <Route exact path='/leaderboard' component={PleaseLogIn}/>
                                  <Route exact path='/add' component={PleaseLogIn}/>
                                  <Route exact path='/' component={PleaseLogIn}/>
                                  <Route component={PleaseLogIn}/>
                              </Switch>

                      }
                  </Paper>
              </Fragment>
          </BrowserRouter>
      </div>
    );
  }
}

export default connect((state)=>{return {
    authedUser: state.authedUser
}})(App);
