import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const ChatList = (props) => {
    const {classes} = props;
    return (
    <List component="nav" className={classes.chatList} aria-label="contacts">
        <ListItem button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Chat 1" />
        </ListItem>
        <ListItem button>
            <ListItemText inset primary="Chat 2" />
        </ListItem>
    </List>
    );
}

export { ChatList };