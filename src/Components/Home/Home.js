import React from 'react';
import Animated from './Animated';
import GlassCart from './GlassCart';
import Banner from './Banner';
import Comingsoon from './Comingsoon';
import Count from './Count';
import Footer from './Footer';
import Item from './Item';
import Section1 from './Section1';
import Swip from './Swip';
import Catagory from './Catagory';


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
                <h1 className="text-center text-4xl">Social Platform</h1>
            </div>
            <div className='mt-3'>
                <h1 className="text-center text-4xl">Catagory</h1>
            </div>
            <Catagory></Catagory>
            <Count></Count>
            <div className='mt-3'>
                <h1 className="text-center text-4xl">Latest Customer</h1>
            </div> 
            <Item></Item> 
           <div className="mt-2">
            <Comingsoon></Comingsoon>
           </div>
           <div className="mt-2">
            <Section1></Section1>
           </div>
           <GlassCart></GlassCart>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;