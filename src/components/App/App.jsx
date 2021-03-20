import React from 'react';
import PropTypes from "prop-types";
import { CssBaseline, Container, Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { Router } from '../Router';
import { Header } from '../Header';

const styles = (theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        height: '720px',
    },
    header: {
        // padding: theme.spacing(2),
        // backgroundColor: theme.palette.grey[200],
        flexGrow: 1,
        color: "inherit",
    },
    menu: {
        color: 'white',
    }
  });

  class _App extends React.Component {
    static propTypes = {
      classes: PropTypes.object,
    };

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Header classes={classes}/>
                            </Grid>
                            <Router/>
                        </Grid>
                    </div>
                </Container>
            </React.Fragment>
        );
    };
};

const App = withStyles(styles)(_App);

export { App };