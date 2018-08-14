import React, {Component} from 'react'

class NoMatch extends Component {

    render () {
        return (
            <div>
                <h3 style={{
                    color: 'red'
                }}> URL Not found </h3>
                <p> Please click on the NavBar to navigate to a valid URL</p>
                <a href='/'>Home</a>
                <hr/>
                <a href='/add'>Add Question</a>
                <hr/>
                <a href='/leaderboard'>View Leaderboard</a>
            </div>
        )
    }
}

export default NoMatch
