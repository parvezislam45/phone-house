import React, { useState } from "react";
import "./Item.css"

const glassCart = () => {
  return (
    <div>
     <div class="p-24 flex flex-wrap items-center justify-center">
    
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg h-full">
      <div class="relative flex items-center justify-center">
        <img class="relative w-40" src="https://i.ibb.co/QbPrdjm/pro-2019.jpg" alt=""/>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Indoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Peace Lily</span>
          <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <img class="relative w-40" src="https://www.allphones.com.au/media/wysiwyg/allphone/category5.png" alt=""/>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Outdoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Monstera</span>
          <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
        </div>
      </div>
    </div>
    <div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
      <div class="relative pt-10 px-10 flex items-center justify-center">
        <img class="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt=""/>
      </div>
      <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1">Outdoor</span>
        <div class="flex justify-between">
          <span class="block font-semibold text-xl">Oak Tree</span>
          <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
        </div>
      </div>
    </div>
    
  </div>
  </div>
  );
};

export default glassCart;
