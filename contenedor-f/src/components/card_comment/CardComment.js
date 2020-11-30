import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 20,
  },
});

export default function CardComment(props){

    const { created, message } = props.data;
    const { name, picture } = props.data.author;
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          height="140"
          component="img"
          src={picture}
        />
        <CardContent>
          <Typography style={{fontSize: 16, fontWeight: 'bold'}} gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography style={{fontSize: 14}} gutterBottom variant="h5" component="h2">
            {created.substring(0,10)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {message.substring(0,120)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
