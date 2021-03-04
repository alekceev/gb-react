import {Toolbar, AppBar, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const { classes, children } = props;

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.header} variant="h6">
                    {children}
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
};

export { Header };