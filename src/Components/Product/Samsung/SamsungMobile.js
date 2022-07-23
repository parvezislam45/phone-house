import React, { useEffect, useState } from 'react';
import MobileDetails from './MobileDetails';

const SamsungMobile = () => {
    const[mobiles,setMobile]=useState([])
    useEffect(()=>{
        fetch('Samsung.json')
        .then(res => res.json())
        .then(data => setMobile(data))
    },[])
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
            {
                mobiles.map(mobile =><MobileDetails
                key={mobile.id}
                mobile={mobile}
                ></MobileDetails>)
            }
        </div>
    );
};

export default SamsungMobile;