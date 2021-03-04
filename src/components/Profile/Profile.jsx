import {Link} from 'react-router-dom';
import {Grid, Typography} from '@material-ui/core';

const Profile = () => {
    return (
        <Grid item xs={9}>
            <Typography variant="h3">
                Profile
            </Typography>
            <Typography>
                <Link to="/">На главную</Link>
            </Typography>
        </Grid>
    );
};

export { Profile };