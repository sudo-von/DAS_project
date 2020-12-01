import React from 'react';
/* Material-ui components. */
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
/* React Router. */
import { useHistory } from 'react-router-dom';

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

export default function CardLyric(props){
  /* Destructuring props. */
  const url = props.data.credits.url;
  const { value } = props.data;
  /* Hooks. */
  const classes = useStyles();

  return (
    <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                        {value}
                    </Typography>
                    <Typography style={{marginTop: 5, fontSize: 12, textAlign: 'right'}} component="h5" variant="h5">
                        <a href={url} target="_blank">{url}</a>
                    </Typography>
                </CardContent>
            </div>
        </Card>
    </div>
  );
}
