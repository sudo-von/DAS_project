import React from 'react';
/* Custom components. */
import CardSong from '../card_song/CardSong';
/* Material-ui components. */
import Carousel from 'react-material-ui-carousel'

export default function CarouselCard(props){
    /* Destructuring. */
    const { playlist, carouselId, route } = props;

    return (
        <Carousel style={{display: 'flex', justifyContent: 'center'}} index={carouselId} autoPlay={false} animation={"slide"}  >
            {playlist.map((data, i) => (
                <CardSong route={route} key={i} data={data} carouselId={i}></CardSong>
            ))}
        </Carousel>
    );
}