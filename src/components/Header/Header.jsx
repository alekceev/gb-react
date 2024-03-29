import { Toolbar, AppBar, Button, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { delChat } from '../../redux/actions/chatlistActions';
import { loadProfile } from '../../redux/actions/profileActions';
import { PushToggle } from '../PushToggle';

class _Header extends React.Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        classes: PropTypes.object,
    };

    componentDidMount() {
        // загрузка профиля, если имя не задано
        if (!("name" in this.props.profile) || this.props.profile.name.length === 0) {
            this.props.loadProfile();
        }
    }

    handleDelChat = (event) => {
        // удаляем чат
        this.props.delChat(event.target.dataset.chatid);
        // и кидаем на главную
        this.props.push('/');
    };

    render () {
        // console.log('header', this.props);
        const { classes, profile, chats, router } = this.props;
        // TODO понять как лучше вытянуть id чата
        let paths = router.location.pathname.split('/');
        let chatId = parseInt( paths[paths.length-1] );
        const currentChat = !isNaN(chatId) && chats[chatId] && chats[chatId].name;

        return (
            <AppBar position="static">
                <Toolbar>
                    <PushToggle />
                    <Typography className={classes.header} variant="h6">
                        {currentChat && 
                            <>
                                {currentChat}
                                <Box
                                    component="sup"
                                    display="inline"
                                    size="small"
                                    onClick={this.handleDelChat}
                                    data-chatid={chatId}
                                >x</Box>
                            </>
                        }
                    </Typography>
                    <Typography className={classes.header} variant="h6">
                        {profile.name}
                    </Typography>
                    <Link to="/">
                        <Button className={classes.menu}>Home</Button>
                    </Link>
                    <Link to="/profile">
                        <Button className={classes.menu}>Profile</Button>
                    </Link>
                </Toolbar>
        </AppBar>
        );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    chats: state.chats,
    router: state.router,
});

const Header = connect(mapStateToProps, {delChat, push, loadProfile})(_Header);

export { Header };