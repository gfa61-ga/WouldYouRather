import React, {Component} from 'react'
import {connect} from 'react-redux'

import {handleNewQuestion} from "../Actions";

import {Redirect} from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class AddPoll extends Component {

    handleSubmit = () => {
        let newQuestion = {
            author: this.props.author,
            optionOneText: this.optionOne.value,
            optionTwoText: this.optionTwo.value

        }

        this.props.dispatch(handleNewQuestion(newQuestion))

        this.setState({
            redirectToUnAnswered: true
        })
    }

    handleUpdate = () => {
        let lengthOptionOne = this.optionOne.value.length
        let lengthOptionTwo = this.optionTwo.value.length

        if (lengthOptionOne && lengthOptionTwo) {
            this.setState({
                disableSubmitBtn: false
            })
        }
        else {
            this.setState({
                disableSubmitBtn: true
            })
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            disableSubmitBtn: true,
            redirectToUnAnswered: false


        }

    }

    render() {
        if (this.state.redirectToUnAnswered) {
            return <Redirect to='/'/>
        }

        const {users, author} = this.props

        let input1 = <input
            style={{width: '80%'}}
            type='text'
            placeholder='Option one... '
            ref={(input) => this.optionOne = input}
            onChange={this.handleUpdate}
        />

        let input2 = <input
            style={{width: '80%'}}
            type='text'
            placeholder='Option two...'
            ref={(input) => this.optionTwo = input}
            onChange={this.handleUpdate}
        />


        return (

            <div>


                <Card style={{
                    backgroundColor: '#F30057'
                }}>
                    <CardHeader/>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={3} style={{margin: 'auto'}}>
                                <Grid container alignItems='center' spacing={16} direction='column' justify='center'>
                                    <Grid item>
                                        <Avatar src={users[author].avatarURL}
                                                style={{
                                                    margin: 'auto',
                                                    width: '100px',
                                                    height: '100px'
                                                }}/>
                                    </Grid>
                                    <Grid item> <Typography style={{color: 'white'}} variant='caption' align='center'>
                                        {'You will be asking'}
                                    </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={9}>
                                <Grid container spacing={16} direction='column'>
                                    <Grid item>
                                        <Card>

                                            <CardHeader
                                                title='Would you rather'

                                            />
                                            <CardContent>
                                                {input1}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item>
                                        <Card>
                                            <CardHeader
                                                title='Or'
                                            />
                                            <CardContent>
                                                {input2}
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            onClick={this.handleSubmit}
                                            disabled={this.state.disableSubmitBtn}
                                            variant='contained' color='primary'>
                                            Submit New Poll
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        author: authedUser,
        users

    }

}

export default connect(mapStateToProps)(AddPoll)