import { Component, Fragment, createRef } from 'react';
import { Message } from '../Message';
import {TextField, Button, Icon} from '@material-ui/core';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import { ThumbDownSharp } from '@material-ui/icons';
import {sendMessage} from '../../redux/actions/messageActions';

class _Messages extends Component {
    static propTypes = {
        chatId: PropTypes.string,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,

    };

    state = {
        answers: [
            {user: 'bot', text: 'What?'},
            {user: 'bot', text: 'Pong'}
        ],
        textMessage: '',
    }

    messageRef = createRef();
    messagesRef = createRef();

    componentDidMount() {
        // this.messageRef.current.focus();
    }

    componentDidUpdate() {
        // if (!this.props.messages[this.props.chatId]) {
        //     this.props.messages[this.props.chatId] = [];
        // }

        const messages = this.props.messages[this.props.chatId] || [];
        if (messages.length && messages[messages.length - 1].user  === 'me') {

            let answer = this.state.answers[ Math.floor(Math.random() * this.state.answers.length) ];

            setTimeout(() => {
                this.doFormSubmit(answer.text, answer.user);
            }, 1000);
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

    doFormSubmit = (msg = '', user = '') => {
        const message = this.messageRef.current;
        const {chatId} = this.props;

        if (msg.length || this.state.textMessage.length) {
            this.props.sendMessage( msg || this.state.textMessage, user || 'me', chatId );
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
        console.log('props', this.props);
        const {classes, messages = {}, chatId, chats} = this.props;

        if (!chatId) {
            return (<div/>);
        } else {
            messages[chatId] ||= [];
        }

        return (
            <Fragment>
            <div className="messages" ref={this.messagesRef}>
                {messages[chatId].map((item, index) => (
                    <Message key={index} classes={classes} {...item} />
                ))}
            </div>
            <form onSubmit={this.handleSubmit} className={classes.paper}>
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
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({sendMessage}, dispatch);
// const Messages = connect(mapStateToProps, mapDispatchToProps)(_Messages);
const Messages = connect(mapStateToProps, {sendMessage})(_Messages);

export { Messages };