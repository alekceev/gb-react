import {Toolbar, AppBar, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class _Header extends React.Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        classes: PropTypes.object,
    };

    render () {
        // console.log('header', this.props);
        const { classes, profile, chats, chatId } = this.props;
        const currentChat = chatId && chats[chatId];

        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.header} variant="h6">
                        {currentChat}
                    </Typography>
                    <Typography className={classes.header} variant="h6">
                        {profile.name}
                    </Typography>
                    <Link to="/">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/profile">
                        <Button color="inherit">Profile</Button>
                    </Link>
                </Toolbar>
        </AppBar>
        );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profile,
    chats: state.chats,
});

const Header = connect(mapStateToProps)(_Header);

export { Header };