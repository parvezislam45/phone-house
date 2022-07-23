import React from 'react';
import { useState } from 'react';
import WatchDetails from './WatchDetails';

const AllWatch = () => {
    const [watchs,setWatchs]= useState([])
    fetch('Watch.json')
    .then(res => res.json())
    .then (data => setWatchs(data))
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
           {
            watchs.map(watch => <WatchDetails
            key={watch._id}
            watch={watch}
            ></WatchDetails>)
           } 
        </div>
    );
};

export default AllWatch;