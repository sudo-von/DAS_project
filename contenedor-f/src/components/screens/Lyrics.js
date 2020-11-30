import React from 'react';
/* Custom components. */
import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';
import CardLyric from '../card_lyric/CardLyric';
/* Material-ui components. */
import Grid from '@material-ui/core/Grid';

export default class Lyrics extends React.Component{
  /* State. */
  constructor(props) {
    super(props);
    this.state = {
      lyrics: null,
      loading: true,
      id: this.props.location.id,
      carouselId: this.props.location.carouselId,
    };
  }

  async componentDidMount(){
    await this.getLyrics();
  }

  /* Fetch the lyrics and render them. */
  getLyrics = async () => {
    const request = await fetch(`http://nodeapi:1337/songs/lyrics/${this.state.id}`, 
      {
        headers: {
          "Accept" : "application/json",
        },
      }
    );
    const lyrics = await request.json();
    /* If there is data then render it. */
    if(lyrics){
      this.setState({
        lyrics: lyrics['lyrics'],
        loading: false,
      });
    }else{
      alert('There are no lyrics...');
    }
  }

  render(){
    return (
      <div>
        <Navbar back={this.state.carouselId} title="Lyrics"></Navbar>
          <Grid container direction="row" justify="center" alignItems="center">
            {
              this.state.loading &&
              <Loader></Loader>
            }
            {
              this.state.lyrics &&
              <Grid item xs={12} sm={6} md={4}>
                  <CardLyric data={this.state.lyrics}></CardLyric>
              </Grid>
            }
          </Grid>
      </div>
    );
  }
}