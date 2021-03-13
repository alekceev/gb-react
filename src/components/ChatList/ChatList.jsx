import React from 'react';
import { List, ListItemText, TextField, Button, Icon, ListItem, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { addNewChat } from '../../redux/actions/chatlistActions';

class _ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
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
                    {Object.keys(chats).map((id, index) => (
                        <NavLink key={index} to={`/chat/${id}`} activeClassName="active">
                            <ListItem button>
                                <ListItemText inset primary={chats[id].name} />
                                {chats[id].unreaded > 0 &&
                                    <Box component="sup" display="inline">
                                        {chats[id].unreaded}
                                    </Box>
                                }
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
                <form onSubmit={this.handleSubmit} className={classes.newMessage}>
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
)(_ChatList);

export { ChatList };