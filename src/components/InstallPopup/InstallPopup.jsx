import React from 'react';
import Alert from '@material-ui/lab/Alert';

class InstallPopup extends React.Component {
    state = {
        isShown: false,
    };

    componentDidMount() {
        // Определяем, является ли устройство iPhone-ом
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone/.test( userAgent );
        };
        // Определяем, запущено ли приложение отдельно
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

        // Решаем, показать или не показать уведомление об установке:
        if (isIos() && !isInStandaloneMode()) {
           this.handleShow();
        }
    }

    handleShow = () => {
        this.setState({ isShown: true });
    };

    handleHide = () => {
        this.setState({ isShown: false });
    };

    render() {
        if (!this.state.isShown) {
            return '';
        }

        return <Alert onClose={this.handleHide}>
                Установи приложение на свой iPhone: нажми «Поделиться», а затем на экран «Домой»
            </Alert>;
    }
}

export { InstallPopup };