import React from 'react';
/* Custom components. */
import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';
import CardComment from '../card_comment/CardComment';
/* Material-ui components. */
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export default class AddSong extends React.Component{
  /* State. */
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            publishDate : null,
            authorName : null,
            songName : null,
            duration : null,
            youtubeUrl : "https://www.youtube.com/watch?v=BEEFXAltoqo",
            pictureUrl : "https://owldb.net/wp-content/uploads/2019/06/Eve-%E2%80%93-Yamiyo-300x300.jpg",
        };
    }
 
    saveSong = async() => {
        const { publishDate, authorName, songName, duration, youtubeUrl, pictureUrl } = this.state;
        if(!publishDate || !authorName || !songName || !duration || !youtubeUrl || !pictureUrl){
            alert('Completa todos los campos para poder cotinuar');
            this.setState({
                ...this.state,
                loading: false,
            });
            return false;
        }
        this.setState({
            ...this.state,
            loading: true,
        });
        const request = await fetch(`http://localhost:1337/songs`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json",
            },
            body: JSON.stringify({"content": publishDate, "authorname" : authorName, "name" : songName, duration, "url" : youtubeUrl, "picture" : pictureUrl})
        }
      );
      const data = await request.json();
      if(data['message']){
        alert(data['message']);
      }else{
          alert('Internal error... woops...')
      }
      this.setState({
        loading: false,
        publishDate : null,
        authorName : null,
        songName : null,
        duration : null,
        youtubeUrl : "https://www.youtube.com/watch?v=BEEFXAltoqo",
        pictureUrl : "https://owldb.net/wp-content/uploads/2019/06/Eve-%E2%80%93-Yamiyo-300x300.jpg",
    });
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    handleDateChange = (date) => {
        this.setState({
            ...this.state,
            publishDate : date
        });
    };

  render(){
    return (
      <React.Fragment>
        <Navbar title="Add song" back={this.state.carouselId}></Navbar>
          <Grid >
            {this.state.loading &&
                <Loader></Loader>
            }
            {!this.state.loading &&
                <Grid style={{padding: 50, display: 'flex', justifyContent: 'center'}} item xs={12}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <form style={{display: 'flex', flexDirection: 'column'}} noValidate autoComplete="off">
                                    <TextField onChange={this.handleChange.bind(this)} style={{margin: 5}} name="authorName" id="authorName" value={this.state.authorName} label="Author name" variant="outlined" />
                                    <TextField onChange={this.handleChange.bind(this)} style={{margin: 5}} name="songName" id="songName" value={this.state.songName} label="Song name" variant="outlined" />
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker value={this.state.publishDate} onChange={this.handleDateChange} style={{marginLeft: 8, marginRight: 8}} disableToolbar variant="outlined" format="yyyy/MM/dd" margin="normal" id="PublishDate" label="Publish date" KeyboardButtonProps={{'aria-label': 'change date',}}/>
                                    </MuiPickersUtilsProvider>
                                    <TextField onChange={this.handleChange.bind(this)} style={{margin: 5}} name="duration" id="duration" value={this.state.duration} label="Duration (seconds)" variant="outlined" />
                                    <TextField onChange={this.handleChange.bind(this)} style={{margin: 5}} name="youtubeUrl" id="youtubeUrl" value={this.state.youtubeUrl} label="Youtube url" variant="outlined" />
                                    <TextField onChange={this.handleChange.bind(this)} style={{margin: 5}} name="pictureUrl" id="pictureUrl" value={this.state.pictureUrl} label="Picture url" variant="outlined" />
                                </form>
                            </CardContent>
                            <CardActions style={{display: 'flex', justifyContent: 'center', marginBottom: 15, alignItems: 'center'}}>
                                <Button onClick={this.saveSong} style={{color: '#137a7f'}} startIcon={<SaveIcon />} variant="outlined" color="primary">
                                    Save song
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            }
          </Grid>
      </React.Fragment>
    );
  }
}