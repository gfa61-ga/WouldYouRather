import React, {Component, Fragment} from 'react'

import PollCards from './PollCards'


class Answered extends Component {


    render() {

        let sortedIds = Object.keys(this.props.questions)
            .sort((a, b) => this.props.questions[b].timestamp - this.props.questions[a].timestamp)

        return (
            <Fragment>
                {
                    sortedIds.map(id => {
                        return <PollCards key={id} poll={this.props.questions[id]}/>

                    })

                }
            </Fragment>

        )
    }
}


export default Answered