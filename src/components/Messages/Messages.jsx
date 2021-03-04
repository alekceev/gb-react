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
    }

    messageRef = createRef();

    componentDidMount() {
        // this.messageRef.current.focus();
    }

    componentDidUpdate() {
        for (let i = 0; i < this.props.chats.length; i++) {
            if (!this.state.messages[i]) {
                this.state.messages[i] = [];
            }
        }

        const messages = this.state.messages[this.props.chatId] || []; 
        if (messages.length && messages[messages.length - 1].user  === 'me') {

            let answer = this.state.answers[ Math.floor(Math.random() * this.state.answers.length) ];

            setTimeout(() => {
                this.setState({ messages: {...this.state.messages, [this.props.chatId]: [...messages, answer ]} });
            }, 1000);
        }

        this.messageRef.current && this.messageRef.current.focus();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.doFormSubmit();
    }

    doFormSubmit = () => {
        const message = this.messageRef.current;
        const {chatId} = this.props;
        if (message.value) {
            this.setState({ messages: {...this.state.messages, [chatId]: [...this.state.messages[chatId], {user: 'me', text: message.value}] }});
            message.value = '';
            message.focus();
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
            return (<div></div>);
        }

        return (
            <Fragment>
            <div className="messages">
                {this.state.messages[chatId].map((item, index) => (
                    <Message key={index} classes={classes} {...item} />
                ))}
            </div>
            <form onSubmit={this.handleSubmit} className={classes.paper}>
                <TextField
                    key={chatId}
                    onKeyDown={this.handleKeyDown}
                    inputRef={this.messageRef}
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