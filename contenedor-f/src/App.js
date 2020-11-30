import React from 'react';
/* Custom components. */
import Navbar from './components/navbar/Navbar';
import Loader from './components/loader/Loader';
import CarouselCard from './components/carousel_card/CarouselCard';
/* Material-ui components. */
import Grid from '@material-ui/core/Grid';

export default class App extends React.Component{
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
      let json = [{"id":1501,"publishDate":"2010-02-14T00:00:00Z","name":"ローリンガール","duration":196,"url":"https://youtu.be/vnw8zURAxkU","picture":"http://nicovideo.cdn.nimg.jp/thumbnails/9714351/9714351","ranking":{"favorited":166,"score":760},"author":{"name":"ヒトリエ / wowaka","artists":"wowaka feat. 初音ミク"}},{"id":3022,"publishDate":"2008-12-19T00:00:00Z","name":"炉心融解","duration":333,"url":"https://youtu.be/LGxLbCQQkjI","picture":"http://tn-skr2.smilevideo.jp/smile?i=8089993","ranking":{"favorited":134,"score":628},"author":{"name":"kuroneko420","artists":"iroha(sasaki) feat. 鏡音リン"}},{"id":8394,"publishDate":"2011-09-17T00:00:00Z","name":"千本桜","duration":246,"url":"https://youtu.be/PJFNE9YiYX8","picture":"http://tn-skr3.smilevideo.jp/smile?i=15630734","ranking":{"favorited":171,"score":597},"author":{"name":"syana2010","artists":"黒うさP feat. 初音ミク"}},{"id":19094,"publishDate":"2013-03-04T00:00:00Z","name":"ロストワンの号哭","duration":217,"url":"https://youtu.be/O0TtDeDiHcE","picture":"http://tn-skr3.smilevideo.jp/smile?i=20244918","ranking":{"favorited":127,"score":583},"author":{"name":"AmeSubs","artists":"Neru feat. 鏡音リン Append (Power)"}},{"id":15662,"publishDate":"2012-08-14T00:00:00Z","name":"ODDS&ENDS","duration":354,"url":"https://youtu.be/iOFZKwv_LfA","picture":"https://i.ytimg.com/vi/6OmwKZ9r07o/default.jpg","ranking":{"favorited":129,"score":567},"author":{"name":"sonymusicnetwork","artists":"ryo feat. 初音ミク"}},{"id":368,"publishDate":"2010-08-19T00:00:00Z","name":"マトリョシカ","duration":201,"url":"https://youtu.be/HOz-9FzIDf0","picture":"https://i.ytimg.com/vi/HOz-9FzIDf0/default.jpg","ranking":{"favorited":155,"score":564},"author":{"name":"米津玄師","artists":"ハチ feat. 初音ミク, GUMI"}},{"id":8395,"publishDate":"2012-03-12T00:00:00Z","name":"Tell Your World","duration":257,"url":"https://youtu.be/PqJNc9KVIZE","picture":"https://i.ytimg.com/vi/PqJNc9KVIZE/default.jpg","ranking":{"favorited":108,"score":550},"author":{"name":"kz-livetune","artists":"kz feat. 初音ミク"}},{"id":63276,"publishDate":"2014-08-17T00:00:00Z","name":"ヒビカセ","duration":250,"url":"https://youtu.be/TkroHwQYpFE","picture":"https://i.ytimg.com/vi/TkroHwQYpFE/default.jpg","ranking":{"favorited":107,"score":547},"author":{"name":"Reol Official","artists":"Giga feat. 初音ミク V3 (Solid)"}},{"id":49755,"publishDate":"2014-02-22T00:00:00Z","name":"LUVORATORRRRRY!","duration":207,"url":"https://youtu.be/LHdlw9F3KP4","picture":"http://tn-skr4.smilevideo.jp/smile?i=22942867","ranking":{"favorited":103,"score":531},"author":{"name":"Reol Official","artists":"Giga, れをる feat. 鏡音リン Append (Power), V3 GUMI (Power)"}},{"id":20,"publishDate":"2010-05-18T00:00:00Z","name":"ワールズエンド・ダンスホール","duration":218,"url":"https://youtu.be/ZB75e7vzX0I","picture":"http://tn-skr4.smilevideo.jp/smile?i=10759623","ranking":{"favorited":103,"score":515},"author":{"name":"ヒトリエ / wowaka","artists":"wowaka feat. 初音ミク, 巡音ルカ"}},{"id":1320,"publishDate":"2008-02-22T00:00:00Z","name":"恋は戦争","duration":235,"url":"https://youtu.be/3Jf3rEzIFpA","picture":"http://tn-skr1.smilevideo.jp/smile?i=2397344","ranking":{"favorited":93,"score":491},"author":{"name":"soundares","artists":"ryo, supercell feat. 初音ミク"}},{"id":1326,"publishDate":"2008-05-31T00:00:00Z","name":"ワールドイズマイン","duration":255,"url":"https://youtu.be/JW-bFg06Qgc","picture":"http://tn-skr4.smilevideo.jp/smile?i=3504435","ranking":{"favorited":91,"score":475},"author":{"name":"soundares","artists":"ryo, supercell feat. 初音ミク"}},{"id":555,"publishDate":"2011-08-14T00:00:00Z","name":"東京テディベア","duration":193,"url":"https://youtu.be/GOH0jlaYvco","picture":"http://tn-skr3.smilevideo.jp/smile?i=15308214","ranking":{"favorited":88,"score":460},"author":{"name":"Areisen","artists":"Neru, おればな なP feat. 鏡音リン Append (Sweet), 鏡音リン Append (Power)"}},{"id":1381,"publishDate":"2010-07-15T00:00:00Z","name":"モザイクロール","duration":191,"url":"https://youtu.be/DnLFVUi3oOU","picture":"https://i.ytimg.com/vi/DnLFVUi3oOU/default.jpg","ranking":{"favorited":78,"score":456},"author":{"name":"Inc. U/M/A/A","artists":"DECO*27 feat. GUMI"}},{"id":1032,"publishDate":"2009-08-19T00:00:00Z","name":"ロミオとシンデレラ","duration":280,"url":"https://youtu.be/rrCpDYC1P4s","picture":"http://tn-skr1.smilevideo.jp/smile?i=6666016","ranking":{"favorited":85,"score":455},"author":{"name":"KazearashiP","artists":"doriko feat. 初音ミク"}},{"id":1322,"publishDate":"2007-12-07T00:00:00Z","name":"メルト","duration":256,"url":"https://youtu.be/BDDYKsNRW3k","picture":"http://tn-skr4.smilevideo.jp/smile?i=1715919","ranking":{"favorited":92,"score":448},"author":{"name":"Suavis Station","artists":"ryo feat. 初音ミク"}},{"id":68814,"publishDate":"2014-10-08T00:00:00Z","name":"ECHO","duration":244,"url":"https://youtu.be/cQKGUgOfD8U","picture":"http://tn-skr3.smilevideo.jp/smile?i=24643818","ranking":{"favorited":86,"score":436},"author":{"name":"Crusher-P","artists":"Crusher, CIRCRUSH feat. V3 GUMI (English)"}},{"id":1363,"publishDate":"2011-07-15T00:00:00Z","name":"からくりピエロ","duration":295,"url":"https://youtu.be/xxFkW3PCT5M","picture":"http://tn-skr2.smilevideo.jp/smile?i=15022913","ranking":{"favorited":80,"score":428},"author":{"name":"40meterP","artists":"40mP feat. 初音ミク"}},{"id":11219,"publishDate":"2012-04-11T00:00:00Z","name":"六兆年と一夜物語","duration":221,"url":"https://youtu.be/Om3MTou2kPg","picture":"http://tn-skr4.smilevideo.jp/smile?i=17520775","ranking":{"favorited":118,"score":415},"author":{"name":"ke-sanβ channel","artists":"kemu feat. IA"}},{"id":2443,"publishDate":"2008-07-31T00:00:00Z","name":"Last Night, Good Night","duration":396,"url":"https://youtu.be/T6mMMYSqlM4","picture":"https://i.ytimg.com/vi/T6mMMYSqlM4/default.jpg","ranking":{"favorited":89,"score":409},"author":{"name":"kzlivetune","artists":"kz feat. 初音ミク"}}];
      this.setState({
        playlist: json,
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
          <CarouselCard playlist={this.state.playlist}></CarouselCard>
        </Grid>
      </div>
    );
  }
}