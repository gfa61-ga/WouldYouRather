import React, {Component} from 'react'

import {connect} from 'react-redux'

import LeaderCards from './LeaderCards'

class LeaderBoard extends Component {
    render() {
        const {rankings, users} = this.props
        return (
            <div>


                {
                    rankings.map((e, index) => {
                        return <LeaderCards
                            // user={users[e.name]}
                            key={e.name}

                            rank={index + 1}
                            answered={e.answeredScore}
                            posted={e.questionsScore}
                            score={e.TotalScore}
                            name={users[e.name].name}
                            url={users[e.name].avatarURL}
                        />
                    })
                }
            </div>
        )
    }
}

function extractRankingData(users) {
    let rankings = []

    Object.keys(users).map((user) => {
        let profile = {}
        profile.name = user
        profile.answeredScore = Object.keys(users[user].answers).length
        profile.questionsScore = users[user].questions.length
        profile.TotalScore = profile.answeredScore + profile.questionsScore
        rankings.push(profile)
    })

    rankings.sort((a, b) => b.TotalScore - a.TotalScore)

    return rankings
}

function mapStateToProps({users}) {
    return {
        rankings: extractRankingData(users),
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)