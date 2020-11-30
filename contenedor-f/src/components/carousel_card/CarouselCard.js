import React from 'react';
/* Custom components. */
import CardSong from '../card_song/CardSong';
/* Material-ui components. */
import Carousel from 'react-material-ui-carousel'

export default function CarouselCard(props){
    /* Destructuring. */
    const { playlist, carouselId } = props;

    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            >
            <Carousel index={carouselId} autoPlay={false} animation={"slide"}  >
                {playlist.map((data, i) => (
                    <CardSong key={i} data={data} carouselId={i}></CardSong>
                ))}
            </Carousel>
        </div>
    );
}