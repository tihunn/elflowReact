import React from 'react';
import {Carousel} from "react-bootstrap";

const CarouselComponent = (props) => {
    let showIsCompressed = (img) => {
        return props.compressed
            ? process.env.REACT_APP_API_URL + "compressed/" + img
            : process.env.REACT_APP_API_URL + img
    }

    const carousel = () => {
        return <Carousel>
            { props.image.map(img => {
                return <Carousel.Item key={img}>
                         <img className={props.css.img}
                              alt="картинка цветка"
                              onClick={props.onClick}
                              src={ showIsCompressed(img) }
                         />
                </Carousel.Item>
            }) }
        </Carousel>
    }

    if (props.image) {
        return (
            <div>
                {props.image.length !== 1
                    ? carousel()
                    : <img className={props.css.img}
                           src={ showIsCompressed(props.image[0]) }
                           alt="картинка цветка"
                           onClick={props.onClick}
                    />}
            </div>
        );
    }
    return <div/>
};

export default CarouselComponent;