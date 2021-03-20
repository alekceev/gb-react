import React from 'react';
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { compose } from 'redux';
import PropTypes from 'prop-types';

import { ChatList } from '../ChatList';
import { Messages } from '../Messages';

const styles = (theme) => ({
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    header: {},
    messages: {
        height: '540px',
        overflowY: 'auto',
        alignItems: 'flex-end',
    },
    newMessage: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        display: 'flex',
        '> div:first-child': {
            flexGrow: 1,
        },
    },
    chatList: {
        // justifyContent: 'space-between',
        backgroundColor: '#bebebe',
        // overflowY: 'auto',
        height: '540px',
        "& .active": {
            color: 'darkred',
            fontWeight: 500,
        }
    },
});

class _Layout extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        classes: PropTypes.object,
    };

    render() {
        const { classes = {}, match } = this.props;

        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <ChatList classes={classes} className={classes.chatlist}/>
                </Grid>
                <Grid item xs={9} >
                    <Messages classes={classes} className={classes.paper} chatId={match.params.id}/>
                </Grid>
            </React.Fragment>
        );
    }
};

const Layout = compose(
    withRouter,
    withStyles(styles),
)(_Layout);

export { Layout };