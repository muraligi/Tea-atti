import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slidepagebg1 from "../Images/Slide bg4.jpg";
import Slidepagebg2 from "../Images/Slide bg2.jpg";
import Slidepagebg3 from "../Images/Slide bg3.jpeg";
import '../Slide/Slidepage.css';

function Slidepage() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{height: '85vh'}} src={Slidepagebg1} className='d-block w-100 Slide-img'/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: '85vh'}} src={Slidepagebg2} className='d-block w-100 Slide-img'/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height: '85vh'}} src={Slidepagebg3} className='d-block w-100 Slide-img'/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slidepage;