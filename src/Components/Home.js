import React, {Component, Fragment} from 'react'
import {AppBar, Tab, Tabs, Toolbar} from '@material-ui/core'
import {connect} from 'react-redux'
import UnAnswered from './UnAnswered'
import Answered from './Answered'

//TODO: redirect after login to Home

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabId: 1,
        }
    }

    componentDidMount = () => {
        let isEmpty = this.props.questions.emptyUnAnswered

        if (isEmpty) {
            this.setState({
                tabId: 0
            })
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        let wasEmpty = prevProps.questions.emptyUnAnswered
        let isEmpty = this.props.questions.emptyUnAnswered

        if ((!isEmpty) && (wasEmpty)) {
            this.setState({
                tabId: 1
            })
        }
    }

    handleChange = (e, value) => {
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
                        }} value={this.state.tabId}>
                            <Tab label='Answered'/>
                            <Tab label='Unanswered' disabled={this.props.questions.emptyUnAnswered}/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
                {
                    (this.state.tabId === 0) ?
                        <Answered questions={this.props.questions.AnsweredQuestions}/>
                        :
                        <UnAnswered questions={this.props.questions.UnAnsweredQuestions}/>
                }
            </Fragment>

        )
    }
}

function findAnsweredQuestions(user, questions) {

    let AnsweredQuestions = {}
    let UnAnsweredQuestions = {}
    let emptyUnAnswered = false

    for (var key in questions) {
        if (questions[key].optionOne.votes.find((e) => {
            return e === user
        })) {
            Object.assign(AnsweredQuestions, {[key]: questions[key]})


        }
        else if (questions[key].optionTwo.votes.find((e) => {
            return e === user
        })) {
            Object.assign(AnsweredQuestions, {[key]: questions[key]})

        }
        else {
            Object.assign(UnAnsweredQuestions, {[key]: questions[key]})

        }
    }

    emptyUnAnswered = (Object.keys(UnAnsweredQuestions).length === 0)

    return {AnsweredQuestions, UnAnsweredQuestions, emptyUnAnswered}
}

function mapStateToProps({authedUser, questions}) {
    return {
        authedUser,
        questions: findAnsweredQuestions(authedUser, questions),
    }
}

export default connect(mapStateToProps)(Home)