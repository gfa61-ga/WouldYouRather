import React, {Component, Fragment} from 'react';
import {handleInitialData} from "./Actions";
import {connect} from 'react-redux'


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

        this.state = {
            liLength: 100
        }
    }

    componentDidMount = ()=>{
        this.props.dispatch(handleInitialData())
    }

    returnAnLi = (content)=>{
        return <li>{content}</li>
    }

    spitShit = () => {

            let myList = []
            for (let i=0;i<100;i++) {
                myList.push(<p key={i}> for generated p {i}</p>)
            }
            return myList
        
    }
  render() {
    return (
      <div className="App">
          <HeaderNav/>
          <Paper style={{
              margin: '20px'

          }} >
              <div>
                  Rest of App
                  {this.spitShit()}
              </div>
          </Paper>
      </div>
    );
  }
}

export default connect((state)=>{return {}})(App);
