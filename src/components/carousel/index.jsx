import React, { useEffect, useState } from 'react';

//COMPONENTS
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//STYLES
import "../../styles/carousel.scss";

//UTILS
import {shuffle} from "../../utils/helpers.jsx"

const CarouselControl = ({ items }) => {
    //STATES
    const [images, setImages] = useState(items)

    //FUNCTIONS
    useEffect(() => {
       setImages(shuffle(images));
    }, []);

    return (
        <Carousel showArrows={true}>
            {items.map( item => (
                <div className="carousel-item">
                    <img src={`/images/${item}`} alt="" srcset="" />
                </div>
            ))}
        </Carousel>
    )
}

export default CarouselControl
