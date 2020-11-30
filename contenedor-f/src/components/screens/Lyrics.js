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
    };
  }

  async componentDidMount(){
    await this.getLyrics();
  }

  /* Fetch the lyrics and render them. */
  getLyrics = async () => {
    const request = await fetch('https://vocadb.net/api/songs', 
      {
        headers: {
          "Accept" : "application/json",
        },
      }
    );
    const lyrics = await request.json();
    /* If there is data then render it. */
    if(lyrics){
      let json = {"lang":"","value":"遠くで聞こえる\r\n確かに響く声は\r\n誰かの心を\r\n捉える枷になるよ\r\n\r\nああ　色褪せてく\r\n私一人きり　取り残すよ\r\n移り変わる景色も今は\r\nこの胸を引き裂く\r\n僕を追い越してくから\r\n\r\nああ　色褪せてく\r\n私一人きり　閉じこめるよ\r\n瞳が映していた過去は\r\n色付くこと無く\r\nどこかへと堕ちてくから\r\n\r\nああ　色褪せてく\r\n私一人きり　取り残すよ\r\n移り変わる景色も今は\r\nこの胸を引き裂く\r\n僕を追い越してくから","credits":{"source":"","url":"http://www.nicovideo.jp/watch/sm19600724"}};
      this.setState({
        lyrics: json,
        loading: false,
      });
    }else{
      alert('There are no lyrics...');
    }
  }

  render(){
    return (
      <div>
        <Navbar title="Lyrics"></Navbar>
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