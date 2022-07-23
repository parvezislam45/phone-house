import React, { useEffect, useState } from 'react';
import LaptopDetails from './LaptopDetails';

const AllLaptop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('laptop.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className=' container mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 gap-y-15'>
           {
            products.map(product => <LaptopDetails
            key={product._id}
            product={product}
            ></LaptopDetails>)
           } 
        </div>
    );
};

export default AllLaptop;