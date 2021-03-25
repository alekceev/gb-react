import { Component, Fragment, createRef } from 'react';
import { Message } from '../Message';
import {TextField, Button, Icon, CircularProgress} from '@material-ui/core';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sendMessage, loadMessages} from '../../redux/actions/messageActions';
import {setUnreaded} from '../../redux/actions/chatlistActions';

class _Messages extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        chatId: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        chats: PropTypes.object.isRequired,
        isLoading: PropTypes.bool.isRequired,
        loadMessages: PropTypes.func.isRequired,
    };

    state = {
        textMessage: '',
    }

    messageRef = createRef();
    messagesRef = createRef();

    componentDidMount() {
        // this.messageRef.current.focus();
        // if (this.props.chatId) {
        //     this.props.loadMessages(this.props.chatId);
        // }
        this.props.loadMessages();
    }

    componentDidUpdate() {
        const {chatId, chats} = this.props;
        if (chatId && chats[chatId] && chats[chatId].unreaded) {
            // при обновлении списка сообщений вызовим событие отметить об их прочтении
            this.props.setUnreaded(chatId, 0);
        }

        this.messageRef.current && this.messageRef.current.focus();
        if (this.messagesRef.current) {
            this.messagesRef.current.scrollTop = this.messagesRef.current.scrollHeight;
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.doFormSubmit();
    }

    doFormSubmit = (msg = '', user = '', toChatId) => {
        const {chatId, sendMessage} = this.props;

        if (msg.length || this.state.textMessage.length) {
            sendMessage( msg || this.state.textMessage, user || 'me', toChatId || chatId );
            this.setState({
                textMessage: '',
            });
        }
    }

    handleKeyDown = (event) => {
        // console.log(event.key);
        if (event.key === 'Enter') {
            this.doFormSubmit();
        }
    }

    render() {
        // console.log('props', this.props);
        const {classes, messages = {}, chatId, isLoading = false} = this.props;

        if (!chatId) {
            return (<div/>);
        } else if (isLoading) {
            return <CircularProgress/>;
        } else {
            messages[chatId] ||= [];
        }

        return (
            <Fragment>
            <div className={classes.messages} ref={this.messagesRef}>
                {messages[chatId].map((item, index) => (
                    <Message key={index} classes={classes} {...item} />
                ))}
            </div>
            <form onSubmit={this.handleSubmit} className={classes.newMessage}>
                <TextField
                    key={chatId}
                    onKeyDown={this.handleKeyDown}
                    inputRef={this.messageRef}
                    value={this.state.textMessage}
                    onChange={(event) =>
                        this.setState({
                            textMessage: event.target.value,
                        })
                    }
                    id="outlined-basic"
                    variant="outlined"
                    size="small" />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                />
            </form>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    messages: state.chat.messages,
    isLoading: state.chat.isLoading,
    chats: state.chats,
});

const Messages = connect(mapStateToProps, {sendMessage, setUnreaded, loadMessages})(_Messages);

export { Messages };