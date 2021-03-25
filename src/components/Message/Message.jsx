import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid, Paper, Avatar, Typography, Box} from '@material-ui/core';

import {delMessage} from '../../redux/actions/messageActions';

class _Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        classes: PropTypes.object.isRequired,
        delMessage: PropTypes.func.isRequired,
    };

    state = {};

    handleDelMessage = (event) => {
        this.props.delMessage(event.target.dataset.id, this.props.chatId);
    };

    render() {
        const {id, user, text, classes} = this.props;

        return (
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>{user}</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>{text}</Typography>
                    </Grid>
                    <Grid item>
                        <Box
                            component="sup"
                            display="inline"
                            size="small"
                            onClick={this.handleDelMessage}
                            data-id={id}
                        >x</Box>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => ({});

const Message = connect(mapStateToProps, {delMessage})(_Message);

export { Message };