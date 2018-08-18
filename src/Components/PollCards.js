import React, {Component, Fragment} from 'react'

import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class PollCards extends Component {

    render() {

        const {poll, users} = this.props
        const id = poll.id

        return (
            <Fragment>
                <Card>
                    <CardHeader
                        style={{
                            backgroundColor: '#3E54B2',
                        }}
                        title={<Typography style={{
                            color: 'white'
                        }} variant='headline'>{users[poll.author].name + ' Asks'} </Typography>}
                        subheader={<Typography style={{
                            color: 'white'
                        }} variant='caption'>{new Date(poll.timestamp).toString()}</Typography>}
                    />
                    <CardContent>
                        <Grid container
                              direction="row"
                              justify="center"
                              alignItems="center"
                              alignContent='center'
                        >
                            <Grid> <Avatar src={users[poll.author].avatarURL}/> </Grid>
                            <Grid item xs={9}>
                                <Grid alignContent='center' alignItems='center' justify='center' container={true}>
                                    <Grid xs={2} item>
                                        <Typography variant='body2' style={{fontStyle: 'italic'}} color='textSecondary'>
                                            Would you rather</Typography>
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Typography variant='subheading'
                                                    color='textPrimary'> {poll.optionOne.text}</Typography>
                                    </Grid>
                                    <Grid xs={2} item>
                                        <Typography variant='body2' style={{fontStyle: 'italic'}}
                                                    color='textSecondary'> OR </Typography>
                                    </Grid>
                                    <Grid xs={4} item>
                                        <Typography variant='subheading'
                                                    color='textPrimary'> {poll.optionTwo.text}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={2}>
                                <CardActions>
                                    <Button size="small" color="primary"
                                            component={Link}
                                            to={{pathname: `/questions/${id}`}}

                                    >
                                        View Poll
                                    </Button>
                                </CardActions>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Fragment>

        )
    }


}

export default connect(({users}) => {
    return {
        users
    }
})(PollCards);