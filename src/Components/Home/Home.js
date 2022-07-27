import React from 'react';
import Animated from './Animated';
import GlassCart from './GlassCart';
import Banner from './Banner';
import Count from './Count';
import Footer from './Footer';
import Section1 from './Section1';
import Swip from './Swip';
import Catagory from './Catagory';
import New from './New';
import Offer from './Offer';
import Slider from './Slider'


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <div className='mt-3'>
                <h1 className="text-center text-4xl">Finish Your Dream</h1>
            </div>
            <Animated></Animated>
            <div className='mt-3'>
                <h1 className="text-center text-4xl">Your Dream Product</h1>
            </div> 
            <Swip></Swip>
            <div className='mt-3'>
                <h1 className="text-center text-4xl">Service</h1>
                <Count></Count>
            </div>
            <div className='mt-6'>
                <h1 className="text-center text-4xl">Catagory</h1>
                <Slider></Slider>
            </div>
            <div className='mt-6'>
                <h1 className="text-center text-4xl">Latest Offer</h1>
            </div>  
            <Offer></Offer> 
            <div className="mt-5">
            <h1 className="text-center text-4xl">New Arrivals</h1>
            <New></New>
            </div>
           <div className="mt-6">
           <h1 className="text-center text-4xl">Our Brands Partner</h1>
            <Section1></Section1>
           </div>
           <GlassCart></GlassCart>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;