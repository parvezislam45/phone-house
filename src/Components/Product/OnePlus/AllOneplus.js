import React from 'react';
import { useState } from 'react';
import OneplusDetails from './OneplusDetails';

const AllOneplus = () => {
    const [phones,setPhones]=useState([])
    fetch('OnePlus.json')
    .then(res => res.json())
    .then(data => setPhones(data))
    return (
        <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
            {
                phones.map(phone => <OneplusDetails
                key={phone._id}
                phone={phone}
                ></OneplusDetails>)
            }
        </div>
    );
};

export default AllOneplus;