import {Link} from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';

const NotFound = () => {
    return (
        <Grid item xs={9}>
            <Typography variant="h3">
                Page Not Found
            </Typography>
            <Typography>
                <Link to="/">На главную</Link>
            </Typography>
        </Grid>
    );
};

export { NotFound };