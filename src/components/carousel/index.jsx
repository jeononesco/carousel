import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/carousel.scss";

const CarouselControl = ({ items }) => {
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
