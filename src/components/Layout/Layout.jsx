import React from 'react';
import { withRouter } from 'react-router';
import { Grid } from '@material-ui/core';
import { ChatList } from '../ChatList';
import { Messages } from '../Messages';
import { withStyles } from "@material-ui/core/styles";

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

//const _Layout = (props) => {
class _Layout extends React.Component {
    state = {
        chats: ['Chat 1', 'Chat 2', 'Chat 3'],
    };

    addNewChat = (name) => {
        this.setState({ chats: [...this.state.chats, name] });
    }

    render() {
        const { classes = {}, match } = this.props;

        return (
            <React.Fragment>
                <Grid item xs={3}>
                    <ChatList classes={classes} chats={this.state.chats} addNewChat={this.addNewChat}/>
                </Grid>
                <Grid item xs={9}>
                    <Messages classes={classes} chatId={match.params.id} chats={this.state.chats}/>
                </Grid>
            </React.Fragment>
        );
    }
};
const Layout = withStyles(styles)( withRouter(_Layout) );

export { Layout };