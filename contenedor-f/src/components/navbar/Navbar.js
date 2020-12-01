import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
/* Custom components. */
import Sidenav from '../sidenav/Sidenav';
/* React Router. */
import { useHistory } from 'react-router-dom';

/* Component styles. */
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
  },
  title: {
    flexGrow: 1,
  },
});

export default function Navbar(props){
  /* Destructuring props. */
  const { title, route } = props;
  /* Hooks. */
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  /* Currying. */
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Sidenav></Sidenav>
    </div>
  );

  return (
    <AppBar style={{background: '#137a7f'}} position="static">
      <Toolbar>
        <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        {props.back && 
        <IconButton onClick={() => history.push({ pathname: route, carouselId: props.back})} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <KeyboardBackspaceIcon/>
      </IconButton> 
        || props.back == 0 &&
          <IconButton onClick={() => history.push({ pathname: route, carouselId: props.back})} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <KeyboardBackspaceIcon/>
          </IconButton> 
        }
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        {list('left')}
      </Drawer>
    </AppBar>
  );  
}