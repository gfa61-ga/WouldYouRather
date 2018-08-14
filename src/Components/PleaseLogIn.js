import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class PleaseLogIn extends Component {
    render () {
        return (
            <div>
                <h3 style={{
                    color: 'red'
                }}>Please log in before Playing</h3>
            </div>
        )
    }
}

export default PleaseLogIn