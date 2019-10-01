import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../images/img_1.jpg';
import img2 from '../../images/img_2.jpg';
import './carousel.scss';

class Carousell extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
};

export default Carousell;