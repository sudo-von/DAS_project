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

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 10,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 'auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  paper: {
    position: 'absolute',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CardSong(props){
  console.log(props.carouselId);
  /* Destructuring props. */
  const { id, name, url, picture, publishDate, duration } = props.data;
  const { artists } = props.data.author;
  /* Hooks. */
  const classes = useStyles();
  const history = useHistory();
  /* getModalStyle is not a pure function, we roll the style only on the first render */
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CardContent className={classes.content}>
          <ReactPlayer url={url}/>
      </CardContent>
    </div>
  );

  return (
    <div>
        <AppBar style={{background: 'transparent', boxShadow: '0 0 0 0 rgba(0,0,0,0)'}} position="static">
          <Toolbar style={{display: 'flex', justifyContent: 'center', padding: 5}}>
            <Button onClick={() => history.push({ pathname :`/comments/${id}`, carouselId: props.carouselId})} style={{margin: 5, background: '#6ec4c0', color: 'white'}}><ChatIcon style={{marginRight: 10}}/>Comments</Button>
            <Button onClick={handleOpen} style={{margin: 5, background: '#6ec4c0', color: 'white'}}><YouTubeIcon style={{marginRight: 10}}/>Video</Button>
            <Button onClick={() => history.push({ pathname :`/lyrics/${id}`, carouselId: props.carouselId})} style={{margin: 5, background: '#6ec4c0', color: 'white'}}><AlbumIcon style={{marginRight: 10}}/>Lyrics</Button>
          </Toolbar>
        </AppBar>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                  {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
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
        <CardMedia
          component="img"
          className={classes.cover}
          src={picture}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        </Card>
    </div>
  );
}
