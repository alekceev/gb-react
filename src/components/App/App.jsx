import {Component} from 'react';
import { Messages } from '../Messages';

class App extends Component {
    render() {
        return (
            <div id="chat">
                <h2>Messages</h2>
                <Messages/>
            </div>
        );
    }
}

export { App };