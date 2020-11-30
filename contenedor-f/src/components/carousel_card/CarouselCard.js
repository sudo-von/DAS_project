import React from 'react';
/* Custom components. */
import CardSong from '../card_song/CardSong';
/* Material-ui components. */
import Carousel from 'react-material-ui-carousel'
import Box from "@material-ui/core/Box";

export default function CarouselCard(props){
    /* Destructuring. */
    const { playlist } = props;

    return (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            >
            <Carousel autoPlay={false} animation={"slide"}  >
                {playlist.map((data, i) => (
                    <CardSong key={i} data={data}></CardSong>
                ))}
            </Carousel>
        </div>
    );
}