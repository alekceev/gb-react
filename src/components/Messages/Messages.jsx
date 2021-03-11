import { Component, Fragment, createRef } from 'react';
import { Message } from '../Message';
import {TextField, Button, Icon} from '@material-ui/core';
import { ThumbDownSharp } from '@material-ui/icons';

class Messages extends Component {
    state = {
        messages: {
            0: [
                {user: 'me', text: 'Hi'},
                {user: 'bot', text: 'How are you?'}
            ],
            1: [],
            2: []
        },
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
        if (!this.state.messages[this.props.chatId]) {
            this.state.messages[this.props.chatId] = [];
        }

        const messages = this.state.messages[this.props.chatId];
        if (messages.length && messages[messages.length - 1].user  === 'me') {

            let answer = this.state.answers[ Math.floor(Math.random() * this.state.answers.length) ];

            setTimeout(() => {
                this.setState({ messages: {...this.state.messages, [this.props.chatId]: [...messages, answer ]} });
            }, 1000);
        }

        this.messageRef.current && this.messageRef.current.focus();
        this.messagesRef.current.scrollTop = this.messagesRef.current.scrollHeight;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.doFormSubmit();
    }

    doFormSubmit = () => {
        const message = this.messageRef.current;
        const {chatId} = this.props;

        if (this.state.textMessage.length) {
            this.setState({
                messages: {
                    ...this.state.messages,
                    [chatId]: [
                        ...this.state.messages[chatId],
                        {
                            user: 'me',
                            text: this.state.textMessage
                        },
                    ],
                },
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
        const {classes, chatId, chats} = this.props;

        if (!chatId || !this.state.messages[chatId]) {
            return (<div/>);
        }

        return (
            <Fragment>
            <div className="messages" ref={this.messagesRef}>
                {this.state.messages[chatId].map((item, index) => (
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

export { Messages };