import React from 'react';
import IphoneSlider from './IphoneSlider';
import {countries} from './Data'
import AllIphone from './AllIphone';


const Iphone = () => {
    return (
        <div>

            <IphoneSlider images={countries}/>
            <AllIphone></AllIphone>
        </div>
    );
};

export default Iphone;