import { Link } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { setName, loadProfile } from '../../redux/actions/profileActions';

const styles = (theme) => ({
    root: {
        margin: theme.spacing(2),
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button: {
        margin: theme.spacing(1),
    }
});


class _Profile extends React.Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        setName: PropTypes.func.isRequired,
        classes: PropTypes.object,
    };

    componentDidMount() {
        this.props.loadProfile();
    }

    userNameRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        this.doFormSubmit();
    }

    handleKeyDown = (event) => {
        // console.log(event.key);
        if (event.key === 'Enter') {
            this.doFormSubmit();
        }
    }
    doFormSubmit = () => {
        const { profile, setName } = this.props;
        const userName = this.userNameRef.current;
        if (userName.value && userName.value !== profile.name) {
            setName(userName.value);
        }
    }
    render() {
        const {classes, profile} = this.props;
        return (
            <Grid item xs={9}>
                <Typography variant="h3">
                    Profile
                </Typography>
                <Typography>
                    <Link to="/">На главную</Link>
                </Typography>

                <form onSubmit={this.handleSubmit} className={classes.root}>
                    <div>
                        <TextField
                            label="Name"
                            id="outlined-size-small"
                            onKeyDown={this.handleKeyDown}
                            inputRef={this.userNameRef}
                            defaultValue={profile.name}
                            variant="outlined"
                            size="small"
                        />
                        <Button
                            className={classes.button}
                            type="submit"
                            variant="contained"
                            color="primary"
                        >Change</Button>
                    </div>
                </form>
            </Grid>
        );
    }
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});

const Profile = compose(
    withStyles(styles),
    connect(mapStateToProps, {setName, loadProfile})
)(_Profile);

export { Profile };