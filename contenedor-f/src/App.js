import React from 'react';
import Playlist from './components/screens/Playlist';
import Comments from './components/screens/Comments';
import Lyrics from './components/screens/Lyrics';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

export default function App(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ withRouter(Playlist) }/>
        <Route path="/playlist" component={ withRouter(Playlist) }/>
        <Route path="/comments/:id" component={ withRouter(Comments) }/>
        <Route path="/lyrics/:id" component={ withRouter(Lyrics) }/>
      </Switch>
    </BrowserRouter>
  );
}
