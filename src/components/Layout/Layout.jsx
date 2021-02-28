import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Header } from '../Header';
import { ChatList } from '../ChatList';
import { Messages } from '../Messages';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    chatList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    header: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    }
  }));

const Layout = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth="md">
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Header classes={classes}/>
                            </Grid>
                            <Grid item xs={3}>
                                <ChatList classes={classes}/>
                            </Grid>
                            <Grid item xs={9}>
                                <Messages classes={classes}/>
                            </Grid>
                      </Grid>
                    </div>
            </Container>
        </React.Fragment>
    );
};

export { Layout };