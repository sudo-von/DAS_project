import React from 'react';
/* Material-ui components. */
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
/* React Router. */
import { Link } from "react-router-dom";
  /* Custom css styles. */
const styles = {
    textDecoration: 'none',
    color: 'gray'
}

export default function Sidenav(){
    return(
        <React.Fragment>
            <div style={{background: 'rgba(19,122,127,.1)', width: '100%', height: 150}}>
                <img style={{width: 100, textAlign: 'left', float: 'left'}} src="https://i.pinimg.com/originals/85/b0/db/85b0db4f7ad7dce7ff28e14f7db75e17.png"/>
            </div>
            <Divider/>
            <Link style={styles} to="/playlist">
                <ListItem button>
                    <ListItemIcon><LibraryMusicIcon/></ListItemIcon>
                    <ListItemText primary="My playlist"/>
                </ListItem>
            </Link>
            <Link style={styles} to="/highlighted">
                <ListItem button>
                    <ListItemIcon><FavoriteIcon/></ListItemIcon>
                    <ListItemText primary="Highlighted songs"/>
                </ListItem>
            </Link>
            <Link style={styles} to="/topRated">
                <ListItem button>
                    <ListItemIcon><StarIcon/></ListItemIcon>
                    <ListItemText primary="Top rated songs"/>
                </ListItem>
            </Link>
            <Link style={styles} to="/addSong">
                <ListItem button>
                    <ListItemIcon><AddIcon/></ListItemIcon>
                    <ListItemText primary="Add song"/>
                </ListItem>
            </Link>
        </React.Fragment>
    );
}