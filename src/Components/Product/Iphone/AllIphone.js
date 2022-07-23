import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import IphoneDetails from './IphoneDetails';

const AllIphone = () => {
    const [iphones,setIphone]=useState([])
    useEffect(()=>{
        fetch('iphone.json')
        .then(res => res.json())
        .then(data => setIphone(data))
    },[])
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
            {
                iphones.map(iphone =><IphoneDetails
                key={iphone._id}
                iphone={iphone}
                ></IphoneDetails>)
            }
        </div>
    );
};

export default AllIphone;