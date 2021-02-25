import {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    };

    render() {
        const {name, text} = this.props;
        return <dl>
            <dt className="name">{name}:</dt>
            <dd className="message">{text}</dd>
        </dl>;
    }
}

export { Message };