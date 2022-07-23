import React from 'react';

const Comingsoon = () => {
    return (
    
<section class="image">
  <div class="flex h-full w-full items-center justify-center container mx-auto px-8">
    <div class="max-w-2xl text-center">
      <h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Comming Soon</h1>

      <p class="mt-6 lg:text-lg text-white">You can subscribe to our newsletter, and let you know when we are back</p>

      <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <input type="text" placeholder="Type here" class="input input-bordered input-info  w-full max-w-xs" />

        <button class="btn btn-outline btn-secondary">Pre Book</button>
      </div>
    </div>
  </div>
</section>
    );
};

export default Comingsoon;