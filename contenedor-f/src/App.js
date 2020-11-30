import React from 'react';
import Playlist from './components/screens/Playlist';
import Comments from './components/screens/Comments';
import Lyrics from './components/screens/Lyrics';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/playlist" component={ Playlist }/>
        <Route exact={true} path="/comments/:id" component={ Comments }/>
        <Route exact={true} path="/lyrics/:id" component={ Lyrics }/>
      </Switch>
    </BrowserRouter>
  );
}
