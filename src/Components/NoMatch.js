import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NoMatch extends Component {

    render () {
        return (
            <div>
                <h3 style={{
                    color: 'red'
                }}> URL Not found </h3>
                <p> Please click on the NavBar to navigate to a valid URL</p>
                <Link to='/'>Home</Link>
                <hr/>
                <Link to='/add'>Add Question</Link>
                <hr/>
                <Link to='/leaderboard'>View Leaderboard</Link>
            </div>
        )
    }
}

export default NoMatch
