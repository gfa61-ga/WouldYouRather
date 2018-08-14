import React, {Component, Fragment} from 'react'
import {AppBar, Toolbar, Tabs, Tab } from '@material-ui/core'
import UnAnswered from './UnAnswered'
import Answered from './Answered'
import SubNav from "./SubNav";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabId: 1
        }
    }

    componentDidMount = ()=> {
        this.setState({
            tabId: 1
        })
    }

    handleChange = (e,value)=>{
        console.log('handling Answered/UnansweredChange with value',value)
        this.setState({
            tabId: value
        })
    }




    render() {
        return (
            <Fragment>

                <AppBar position='sticky' color='default'>
                    <Toolbar variant='dense'>
                        <Tabs onChange={this.handleChange}
                              centered style={{
                            flexGrow: '1'
                        }}  value={this.state.tabId}>
                            <Tab label='Answered'/>
                            <Tab label='Unanswered'/>
                        </Tabs>
                    </Toolbar>
                </AppBar>

                {
                    (this.state.tabId === 0) ? <Answered/> : <UnAnswered/>
                }

            </Fragment>

        )
    }
}

export default Home