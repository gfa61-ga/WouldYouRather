import React, {Component, Fragment} from 'react'

import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom'

import {handleSubmitVote} from "../Actions";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';


class ViewOnePoll extends Component {

    state = {
        toHome: false
    }


    submitVote = (vote) => {

        switch (vote) {
            case 1: {
                return this.props.dispatch(handleSubmitVote(this.props.qID, 'optionOne'))

            }
            case 2: {
                return this.props.dispatch(handleSubmitVote(this.props.qID, 'optionTwo'))

            }
            default:
                return null
        }

    }

    render() {

        if (this.state.toHome === true) {
            return <Redirect to='/'/>
        }

        const {questions, qID, isAnswered, users, authedUser} = this.props

        let totalVotes = 0
        let optionOneCount = 0
        let optionTwoCount = 0
        const yourVote =
            <Chip
                color='primary'

                label='You Voted'
                style={{marginTop: '20px', backgroundColor: 'green', fontColor: 'white'}}
                deleteIcon={<DoneIcon/>}
                onDelete={null}>
            </Chip>
        let youVoted = null
        if (questions.hasOwnProperty(qID)) {
            optionOneCount = questions[qID].optionOne.votes.length
            optionTwoCount = questions[qID].optionTwo.votes.length
            totalVotes = optionOneCount + optionTwoCount
        }
        if (isAnswered) {
            youVoted = users[authedUser].answers[qID]

        }


        return (
            <Fragment>
                {
                    (!questions.hasOwnProperty(qID)) ? <p>invalid Params: questionID:{qID} not found</p> :
                        <Fragment>

                            {
                                (isAnswered)
                                    ?
                                    // ANSWERED CARD
                                    <Card style={{
                                        backgroundColor: '#E0E0E0'
                                    }}>
                                        <CardHeader/>
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={3} style={{margin: 'auto'}}>
                                                    <Grid container alignItems='center' spacing={16} direction='column'
                                                          justify='center'>
                                                        <Grid item>
                                                            <Avatar src={users[questions[qID].author].avatarURL}
                                                                    style={{
                                                                        margin: 'auto',
                                                                        width: '100px',
                                                                        height: '100px'
                                                                    }}/>
                                                        </Grid>
                                                        <Grid item> <Typography variant='caption' align='center'>
                                                            {users[questions[qID].author].name + ' Asked'}
                                                        </Typography>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Grid container spacing={16} direction='column'>
                                                        <Grid item>
                                                            <Card>
                                                                {(youVoted === 'optionOne') ? yourVote : null}
                                                                <CardHeader
                                                                    title={'Would you rather ' + questions[qID].optionOne.text}
                                                                />
                                                                <CardContent>

                                                                    <Typography>{optionOneCount} out
                                                                        of {totalVotes} votes</Typography>
                                                                    <LinearProgress
                                                                        color='secondary'
                                                                        variant='determinate'
                                                                        value={100 * optionOneCount / totalVotes}/>

                                                                </CardContent>
                                                            </Card>
                                                        </Grid>
                                                        <Grid item>
                                                            <Card>
                                                                {(youVoted === 'optionTwo') ? yourVote : null}
                                                                <CardHeader
                                                                    title={'or ' + questions[qID].optionTwo.text}
                                                                />
                                                                <CardContent>

                                                                    <Typography>{optionTwoCount} out
                                                                        of {totalVotes} votes</Typography>
                                                                    <LinearProgress
                                                                        color='secondary'
                                                                        variant='determinate'
                                                                        value={100 * optionTwoCount / totalVotes}>

                                                                    </LinearProgress>

                                                                </CardContent>
                                                            </Card>


                                                        </Grid>

                                                    </Grid>
                                                </Grid>

                                            </Grid>
                                        </CardContent>

                                    </Card>
                                    :
                                    // UN-ANSWERED CARD
                                    <Card style={{
                                        backgroundColor: '#F30057'
                                    }}>
                                        <CardHeader/>
                                        <CardContent>
                                            <Grid container>
                                                <Grid item xs={3} style={{margin: 'auto'}}>
                                                    <Grid container alignItems='center' spacing={16} direction='column'
                                                          justify='center'>
                                                        <Grid item>
                                                            <Avatar src={users[questions[qID].author].avatarURL}
                                                                    style={{
                                                                        margin: 'auto',
                                                                        width: '100px',
                                                                        height: '100px'
                                                                    }}/>
                                                        </Grid>
                                                        <Grid item> <Typography style={{color: 'white'}}
                                                                                variant='caption' align='center'>
                                                            {users[questions[qID].author].name + ' Asks'}
                                                        </Typography>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Grid container spacing={16} direction='column'>
                                                        <Grid item>
                                                            <Card>

                                                                <CardHeader
                                                                    title={'Would you rather ' + questions[qID].optionOne.text}
                                                                />
                                                                <CardActions>
                                                                    <Button onClick={() => {
                                                                        this.submitVote(1)
                                                                    }}
                                                                            style={{margin: 'auto'}}
                                                                            size="small"
                                                                            variant='outlined'
                                                                            color="primary">
                                                                        Vote option One
                                                                    </Button>


                                                                </CardActions>
                                                            </Card>
                                                        </Grid>
                                                        <Grid item>
                                                            <Card>

                                                                <CardHeader
                                                                    title={'or ' + questions[qID].optionTwo.text}
                                                                />
                                                                <CardActions>
                                                                    <Button onClick={() => {
                                                                        this.submitVote(2)
                                                                    }}
                                                                            style={{margin: 'auto'}}
                                                                            size="small"
                                                                            variant='outlined'
                                                                            color="primary">
                                                                        Vote option Two
                                                                    </Button>
                                                                </CardActions>
                                                            </Card>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                            }
                        </Fragment>
                }
            </Fragment>

        )


    }
}

function isAnswered(qID, user) {

    return (user.answers.hasOwnProperty(qID))
}


function mapStateToProps({questions, authedUser, users}, ownProps) {

    return {
        qID: ownProps.match.params.question_id,
        questions,
        authedUser,
        users,
        isAnswered: isAnswered(ownProps.match.params.question_id, users[authedUser])
    }
}

export default connect(mapStateToProps)(ViewOnePoll)