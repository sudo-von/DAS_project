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
      comments: [],
      loading: true,
      id: this.props.location.id,
      carouselId: this.props.location.carouselId,
    };
  }

  async componentDidMount(){
    console.log(this.state.id)
    await this.getComments();
  }

  /* Fetch the comments list and render a carousel with comments. */
  getComments = async () => {
    const request = await fetch(`http://nodeapi:1337/songs/${this.state.id}/comments`, 
      {
        headers: {
          "Accept" : "application/json",
        },
      }
    );
    const comments = await request.json();
    /* If there is data then render it. */
    if(comments){
      this.setState({
        comments: comments['comments'],
        loading: false,
      });
    }else{
      alert('There are no comments...');
    }
  }

  render(){
    return (
      <div>
        <Navbar title="Comments" back={this.state.carouselId}></Navbar>
        <Container maxWidth="md">
          <Grid container direction="row" justify="center" alignItems="center">
            {this.state.loading &&
              <Loader></Loader>
            }
            {this.state.comments.map((res, i) => (
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