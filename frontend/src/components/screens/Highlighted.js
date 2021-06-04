import React from 'react';
/* Custom components. */
import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';
import CarouselCard from '../carousel_card/CarouselCard';
/* Material-ui components. */
import Grid from '@material-ui/core/Grid';

export default class Highlighted extends React.Component{
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
    await this.getHighlightedPlaylist();
  }

  /* Fetch the playlist and render a carousel with songs. */
  getHighlightedPlaylist = async () => {
    const request = await fetch('http://localhost:1337/songs/highlighted', 
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
      alert('There are no highlighted songs...');
    }
  }

  render(){
    return (
      <React.Fragment>
        <Navbar title="Highlighted songs"></Navbar>
        <Grid container direction="column" justify="center" alignItems="center">
          {
            this.state.loading &&
            <Loader></Loader>
          }
          <Grid style={{padding: 50, display: 'flex', justifyContent: 'center'}} item xs={12}>
            <Grid item xs={12} md={8}>
              <CarouselCard route={'/highlighted'} carouselId={this.state.carouselId} playlist={this.state.playlist}></CarouselCard>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}