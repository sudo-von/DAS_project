import React from 'react';
/* Material-ui components. */
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import AlbumIcon from '@material-ui/icons/Album';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Modal from '@material-ui/core/Modal';
/* React Router. */
import { useHistory } from 'react-router-dom';
/* ReactPlayer. */
import ReactPlayer from 'react-player'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function CardSong(props){
  /* Destructuring props. */
  const { route } = props;
  const { id, name, url, picture, publishDate, duration } = props.data;
  const { artists } = props.data.author;
  /* Hooks. */
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
        <AppBar style={{background: 'transparent', boxShadow: '0 0 0 0 rgba(0,0,0,0)'}} position="static">
          <Toolbar style={{display: 'flex', justifyContent: 'center', padding: 5}}>
            <Button onClick={() => history.push({ route: route, pathname :`/comments/${id}`, id: id, carouselId: props.carouselId})} style={{margin: 5, background: '#6ec4c0', color: 'white'}}><ChatIcon style={{marginRight: 10}}/>Comments</Button>
            <Button onClick={() => history.push({ route: route, pathname :`/lyrics/${id}`, id: id, carouselId: props.carouselId})} style={{margin: 5, background: '#6ec4c0', color: 'white'}}><AlbumIcon style={{marginRight: 10}}/>Lyrics</Button>
          </Toolbar>
        </AppBar>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography style={{display: 'flex', alignItems: 'center'}} component="h5" variant="h5">
                  <img src={picture} style={{borderRadius: 100, height: 40, width: 45}}/>
                  <span style={{marginLeft : 5, marginTop: 7}}>
                    {name}
                  </span>
              </Typography>
              <Typography style={{marginTop: 10}} variant="subtitle1" color="textSecondary">
                  {artists}
              </Typography>
              <Typography style={{fontSize: 12}} variant="subtitle1" color="textSecondary">
                  {publishDate.substring(0,10)}
              </Typography>
              <Typography style={{fontSize: 12}} variant="subtitle1" color="textSecondary">
                  {(duration/60).toString().substring(0,1)+' minutes'}
              </Typography>
            </CardContent>
          </div>
          <ReactPlayer url={url}/>
        </Card>
    </React.Fragment>
  );
}
