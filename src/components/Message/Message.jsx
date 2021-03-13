import {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        const {user, text, classes} = this.props;

        return (
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>{user}</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>{text}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export { Message };