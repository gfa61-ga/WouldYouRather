import React, {Component} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';


class SubNav extends Component {


    render () {
        return (
            <div>

            <AppBar position='sticky' color='default'>
                <Toolbar variant='dense'>
                    <Tabs centered style={{
                        flexGrow: '1'
                    }}  value={1}>
                        <Tab label='Answered'/>
                        <Tab label='Unanswered'/>
                    </Tabs>
                </Toolbar>
            </AppBar>
            </div>

            )
    }

}


export default SubNav