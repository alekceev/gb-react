import { Component, Fragment } from 'react';
import { Message } from '../Message';

class Messages extends Component {
    state = {
        name: 'user',
        messages: [
            {text: 'Hi'},
            {text: 'How are you?'}
        ],
        answers: [
            {name: 'bot', text: 'What?'},
            {name: 'bot', text: 'Pong'}
        ],
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2) {

            let answer = this.state.answers[ Math.floor(Math.random() * this.state.answers.length) ];

            setTimeout(() => {
                this.setState({ messages: [...this.state.messages, answer] });
            }, 1000);
        }
    }

    addMessage = () => {
        this.setState({ messages: [...this.state.messages, {text: 'Ping'}] });
    }

    render() {
        return (
            <Fragment>
            <div className="messages">
                {this.state.messages.map((item, index) => (
                    <Message key={index} text={item.text} name={item.name || this.state.name} />
                ))}
            </div>
            <button onClick={this.addMessage}>Send Message</button>
            </Fragment>
        );
    }
}

export { Messages };