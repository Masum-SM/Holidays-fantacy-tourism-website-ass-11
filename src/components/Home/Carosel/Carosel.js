import React from 'react';
import './Carosel.css';
import { Carousel } from 'react-bootstrap';

const Carosel = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block  image"
                        src='photos/caro/b1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3 className='carosel-caption'>Sundarbans: The Home of Royal Bengal Tigers</h3>
                        <p className='carosel-caption'>Date : 10-DEC-21 Duration : 03 Days & 04 Nights</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  image"
                        src='photos/caro/b2.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption className='carosel-caption'>
                        <h3 className='carosel-caption'>Cox’s Bazar Tour: The Beach Holiday</h3>
                        <p className='carosel-caption'>Date : 31-DEC-21 Duration : 03 Days & 02 Nights</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  image"
                        src='photos/caro/b3.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption className='carosel-caption'>
                        <h3 className='carosel-caption'>Sreemangol : The tea garden</h3>
                        <p className='carosel-caption'>Date : 31-NOV-21 Duration : 03 Days & 04 Nights</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Carosel;