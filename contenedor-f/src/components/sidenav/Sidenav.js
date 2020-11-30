import React from 'react';
/* Material-ui components. */
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import ChatIcon from '@material-ui/icons/Chat';
import AlbumIcon from '@material-ui/icons/Album';
/* React Router. */
import { Link } from "react-router-dom";
  /* Custom css styles. */
const styles = {
    textDecoration: 'none',
    color: 'gray'
}

export default function Sidenav(props){
    return(
        <React.Fragment>
            <div style={{background: 'rgba(19,122,127,.1)', width: '100%', height: 150}}>
                <img style={{width: 100, textAlign: 'left', float: 'left'}} src="https://i.pinimg.com/originals/85/b0/db/85b0db4f7ad7dce7ff28e14f7db75e17.png"/>
            </div>
            <Divider/>
            <Link style={styles} to="/playlist">
                <ListItem button>
                    <ListItemIcon><LibraryMusicIcon/></ListItemIcon>
                    <ListItemText primary="Playlist"/>
                </ListItem>
            </Link>
        </React.Fragment>
    );
}