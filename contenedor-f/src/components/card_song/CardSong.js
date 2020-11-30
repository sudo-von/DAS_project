import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
}));

export default function CardSong(props){
    const { name, picture, publishDate, duration } = props.data;
    const { artists } = props.data.author;
    const classes = useStyles();
  return (
    <div>
        <AppBar style={{background: 'transparent', boxShadow: '0 0 0 0 rgba(0,0,0,0)'}} position="static">
            <Toolbar style={{display: 'flex', justifyContent: 'center', padding: 5}}>
                <Button style={{margin: 5, background: '#6ec4c0', color: 'white'}}>Comments</Button>
                <Button style={{margin: 5, background: '#6ec4c0', color: 'white'}}>Lyrics</Button>
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
            title="Live from space album cover"
        />
        </Card>
    </div>
  );
}
