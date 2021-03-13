import React from 'react';
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';
import { ChatList } from '../ChatList';
import { Messages } from '../Messages';
import { withStyles } from "@material-ui/core/styles";
import { compose } from 'redux';

const styles = (theme) => ({
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    header: {
        // padding: theme.spacing(2),
        // backgroundColor: theme.palette.grey[200],
        flexGrow: 1,
        color: "inherit"
    }
});

class _Layout extends React.Component {

    render() {
        const { classes = {}, match } = this.props;

        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <ChatList classes={classes} chatId={match.params.id}/>
                </Grid>
                <Grid item xs={9}>
                    <Messages classes={classes} chatId={match.params.id}/>
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