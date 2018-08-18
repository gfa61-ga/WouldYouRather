import React, {Component} from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

class LeaderCards extends Component {

    render() {

        const {rank, answered, posted, score, name, url} = this.props
        return (
            <Card style={{
                backgroundColor: '#E0E0E0',
                marginBottom: '20px'
            }}>
                <CardHeader/>
                <CardContent>
                    <Grid container>
                        <Grid item xs={3} style={{margin: 'auto'}}>
                            <Grid container alignItems='center' spacing={16} direction='column' justify='center'>
                                <Grid item>
                                    <Avatar src={url}
                                            style={{
                                                margin: 'auto',
                                                width: '100px',
                                                height: '100px'
                                            }}/>
                                </Grid>
                                <Grid item> <Typography style={{color: 'black'}} variant='caption' align='center'>
                                    {name}
                                </Typography>
                                    <Typography style={{color: 'red'}} variant='headline' align='center'>
                                        {rank}
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={9}>
                            <Grid container spacing={16} direction='column'>
                                <Grid item>
                                    <Card>

                                        <CardHeader
                                            title='Answered'
                                        />
                                        <CardContent>
                                            {answered}
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Card>

                                        <CardHeader
                                            title='Posted'
                                        />
                                        <CardContent>
                                            {posted}
                                        </CardContent>

                                    </Card>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant='flat' color='secondary'>
                                        Total Score : {score}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export default LeaderCards