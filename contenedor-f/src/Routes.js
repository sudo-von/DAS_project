import React from 'react';
import Playlist from './components/screens/Playlist';
import Highlighted from './components/screens/Highlighted';
import TopRated from './components/screens/TopRated';
import Comments from './components/screens/Comments';
import AddSong from './components/screens/AddSong';
import Lyrics from './components/screens/Lyrics';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ withRouter(Playlist) }/>
        <Route path="/playlist" component={ withRouter(Playlist) }/>
        <Route path="/highlighted" component={ withRouter(Highlighted) }/>
        <Route path="/topRated" component={ withRouter(TopRated) }/>
        <Route path="/addSong" component={ withRouter(AddSong) }/>
        <Route path="/comments/:id" component={ withRouter(Comments) }/>
        <Route path="/lyrics/:id" component={ withRouter(Lyrics) }/>
      </Switch>
    </BrowserRouter>
  );
}
