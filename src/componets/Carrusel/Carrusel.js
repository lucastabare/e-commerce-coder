import React from 'react'
import { Fragment } from "react";
import { Carousel } from 'react-bootstrap';
import Carusel1 from "./carusel1.jpg"
import Carusel2 from "./carusel2.jpg"
import Carusel3 from "./carrusel3.jpg"

function Carrusel() {
    return (
        <Fragment>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carusel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carusel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Carusel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Fragment>
    )
}

export default Carrusel
