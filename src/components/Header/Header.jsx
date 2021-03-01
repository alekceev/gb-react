import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
    const { description = 'description', title = 'title', classes } = props;

    return (
        <Paper elevation={0} className={classes.header}>
            <Typography variant="h6" gutterBottom>
            {title}
            </Typography>
            <Typography>{description}</Typography>
        </Paper>
    );
};

export { Header };