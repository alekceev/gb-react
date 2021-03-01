import { Component, Fragment, createRef } from 'react';
import { Message } from '../Message';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

class Messages extends Component {
    state = {
        messages: [
            {user: 'me', text: 'Hi'},
            {user: 'bot', text: 'How are you?'}
        ],
        answers: [
            {user: 'bot', text: 'What?'},
            {user: 'bot', text: 'Pong'}
        ],
    }

    messageRef = createRef();

    componentDidMount() {
        this.messageRef.current.focus();
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].user  === 'me') {

            let answer = this.state.answers[ Math.floor(Math.random() * this.state.answers.length) ];

            setTimeout(() => {
                this.setState({ messages: [...this.state.messages, answer] });
            }, 1000);
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.doFormSubmit();
    }

    doFormSubmit = () => {
        const message = this.messageRef.current;
        if (message.value) {
            this.setState({ messages: [...this.state.messages, {user: 'me', text: message.value}] });
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
        const {classes} = this.props;
        return (
            <Fragment>
            <div className="messages">
                {this.state.messages.map((item, index) => (
                    <Message key={index} classes={classes} {...item} />
                ))}
            </div>
            <form onSubmit={this.handleSubmit} className={classes.paper}>
                <TextField onKeyDown={this.handleKeyDown} inputRef={this.messageRef} id="outlined-basic" variant="outlined" size="small" />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<Icon>send</Icon>}
                >Send</Button>
            </form>
            </Fragment>
        );
    }
}

export { Messages };