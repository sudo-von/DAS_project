import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
    accountSettings: {
  
    },
    box: {
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }
  }));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.box}>
         <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={"100%"}
            width={"100%"}
            >
            <CircularProgress style={{color: '#373b3e'}}/>
        </Box>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={"100%"}
            width={"100%"}
            >
            <p style={{color: '#373b3e', fontSize: 14}}>Loading...</p>
        </Box>
    </div>
  );
}
