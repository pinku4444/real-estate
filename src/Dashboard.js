import React, { Component } from 'react'
import Header from './component/Header';
import Carousel from './component/carousel';
import Rents from './component/rents';
import Footer from './component/footer';

class Dashboard extends Component {
    render() {
        return (
            <div>
               <Header /> 
               <Carousel />
               <Rents />
               <Footer />

            </div>
        )
    }
}

export default  Dashboard;
