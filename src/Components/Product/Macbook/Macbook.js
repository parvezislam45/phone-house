import React from 'react';
import AllLaptop from './AllLaptop';
import LaptopSlider from './LaptopSlider';

const Macbook = () => {
    return (
        <div>
            <LaptopSlider className="laptop"></LaptopSlider>
            <AllLaptop></AllLaptop>
        </div>
    );
};

export default Macbook;