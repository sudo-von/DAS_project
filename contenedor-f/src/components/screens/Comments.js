import React from 'react';
/* Custom components. */
import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';
import CardComment from '../card_comment/CardComment';
/* Material-ui components. */
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default class Comments extends React.Component{
  /* State. */
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      loading: true,
    };
  }

  async componentDidMount(){
    await this.getPlaylist();
  }

  /* Fetch the playlist and render a carousel with songs. */
  getPlaylist = async () => {
    const request = await fetch('https://vocadb.net/api/songs', 
      {
        headers: {
          "Accept" : "application/json",
        },
      }
    );
    const playlist = await request.json();
    /* If there is data then render it. */
    if(playlist){
      let json = [{"created":"2016-04-18T20:22:11Z","message":"Well, the album entry says that most songs are remastered, so they sound a bit different. Sometimes, if the remaster is different enough, it makes sense to have another entry for the remastered version.\n\nAre you saying you want to *buy* the original version as mp3, or why are you looking for it? I'd check the other albums this song is featured on, maybe the older version is on some other album.","author":{"name":"riipah","picture":"https://www.gravatar.com/avatar/2f5d563125cdb6d78a300862ff60f9f1?s=80","verified":false,"memberSince":"2011-07-10T18:17:44","active":true,"group":"Trusted"}},{"created":"2016-04-18T20:14:06Z","message":"I've checked out the version of Rolling Girl in Unhappy Refrain (iTunes ver.), and it sounds different to the original song on NND. Where can I find the original version?","author":{"name":"Delta_86","picture":"https://www.gravatar.com/avatar/923c1e9423dbc2ce6c8c4af509ef3019?s=80","verified":false,"memberSince":"2016-02-26T04:24:03","active":true,"group":"Regular"}},{"created":"2015-05-28T09:07:56Z","message":"Actually that's not true. Nico embeds work just fine even if you're not logged in (works here too).","author":{"name":"riipah","picture":"https://www.gravatar.com/avatar/2f5d563125cdb6d78a300862ff60f9f1?s=80","verified":false,"memberSince":"2011-07-10T18:17:44","active":true,"group":"Trusted"}},{"created":"2015-05-27T23:31:27Z","message":"To the anon user who reported the PV as broken, you either have to click on the YT link to view it embeded, or create an NND account, you can't view NND embeds it if you're not logged to NND, or create an account on vocadb.net and make YT your default choice to view embeds.","author":{"name":"zazuge","picture":"https://www.gravatar.com/avatar/d7e612be8a3aa48c1337f26d0770f16a?s=80","verified":false,"memberSince":"2013-05-02T00:43:24","active":true,"group":"Trusted"}}];
      this.setState({
        playlist: json,
        loading: false,
      });
      console.log(json);
    }else{
      alert('There are no comments...');
    }
  }

  render(){
    return (
      <div>
        <Navbar title="Comments"></Navbar>
        <Container maxWidth="md">
          <Grid container direction="row" justify="center" alignItems="center">
            {
              this.state.loading &&
              <Loader></Loader>
            }
              {this.state.playlist.map((res, i) => (
                <Grid item xs={12} sm={6} md={4}>
                  <CardComment data={res}></CardComment>
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    );
  }
}