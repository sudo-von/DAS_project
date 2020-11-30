import React from 'react';
/* Custom components. */
import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';
import CarouselCard from '../carousel_card/CarouselCard';
/* Material-ui components. */
import Grid from '@material-ui/core/Grid';

export default class Playlist extends React.Component{
  /* State. */
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      loading: true,
      carouselId: props.location.carouselId || 0,
    };
  }

  async componentDidMount(){
    await this.getPlaylist();
  }

  /* Fetch the playlist and render a carousel with songs. */
  getPlaylist = async () => {
    const request = await fetch('http://nodeapi:1337/songs', 
      {
        headers: {
          "Accept" : "application/json",
        },
      }
    );
    const playlist = await request.json();
    /* If there is data then render it. */
    if(playlist){
      this.setState({
        ...this.state,
        playlist: playlist,
        loading: false,
      })
    }else{
      alert('There are no songs...');
    }
  }

  render(){
    return (
      <div>
        <Navbar title="Playlist"></Navbar>
        <Grid container direction="column" justify="center" alignItems="center">
          {
            this.state.loading &&
            <Loader></Loader>
          }
          <CarouselCard carouselId={this.state.carouselId} playlist={this.state.playlist}></CarouselCard>
        </Grid>
      </div>
    );
  }
}