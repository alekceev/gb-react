import { Messages } from '../Messages';

const App = () => {
    return (
        <div id="test-id">
            <h2>Hello from React</h2>
            <Messages messages={['First', 'Second']} />
        </div>
    );
};

export { App };