import React from 'react';
import { List, ListItemText, TextField, Button, Icon } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { addNewChat } from '../../redux/actions/chatlistActions';

const styles = (theme) => ({
    header: {

    },
    paper: {

    },
    chatList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        align: 'left',
        "& .active": {
            color: 'darkred',
            fontWeight: 500,
        }
    },
    form: {
        maxWidth: 360,
        width: '100%',
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
});

class _ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.array.isRequired,
        addNewChat: PropTypes.func.isRequired,
        classes: PropTypes.object,
    };

    newChatRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        this.doFormSubmit();
    }

    handleKeyDown = (event) => {
        // console.log(event.key);
        if (event.key === 'Enter') {
            this.doFormSubmit();
        }
    }
    doFormSubmit = () => {
        const { chats, addNewChat } = this.props;
        const newChat = this.newChatRef.current;
        if (newChat.value) {
            addNewChat(newChat.value);
            newChat.value = '';
        }
    }

    render() {
        const {classes, chats} = this.props;
        return (
            <>
                <List component="nav" className={classes.chatList} aria-label="contacts">
                    {chats.map((chat, index) => (
                        <NavLink key={index} to={`/chat/${index}`} activeClassName="active">
                            <ListItem button>
                                <ListItemText inset primary={chat} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
                <form onSubmit={this.handleSubmit} className={classes.form}>
                    <TextField
                        onKeyDown={this.handleKeyDown}
                        inputRef={this.newChatRef}
                        id="standard-basic"
                        size="small" />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        endIcon={<Icon>send</Icon>}
                    />
                </form>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    chats: state.chats,
});

const ChatList = compose(
    connect(mapStateToProps, {addNewChat}),
    withStyles(styles)
)(_ChatList);

export { ChatList };