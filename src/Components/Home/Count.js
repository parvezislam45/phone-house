import React from 'react';
import CountUp from 'react-countup';

const Count = () => {
    return (
        <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
        <div class="stat">
        <div class="stat-figure text-amber-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title text-white">Downloads</div>
        <div class="stat-value text-amber-400"><CountUp delay={1} end={3100} /></div>
        <div class="stat-desc text-white">Jan 1st - Feb 1st</div>
      </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-amber-400 font-semibold  py-4">
            Downloads
        </h3>
        <p class="text-md  text-amber-400 py-4">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
        <div class="stat">
        <div class="stat-figure text-cyan-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
        </div>
        <div class="stat-title text-white">Total User</div>
        <div class="stat-value text-cyan-300"><CountUp delay={1} end={4200} /></div>
        <div class="stat-desc text-white">↗︎ 400 (22%)</div>
      </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-cyan-300 font-semibold  py-4">
            Total User
        </h3>
        <p class="text-md text-cyan-300 py-4">
            Share relevant, engaging, and inspirational brand messages to create a connection with your audience.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
        <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div class="stat-title text-white text-1xl">Subscribe</div>
        <div class="stat-value text-pink-400"><CountUp delay={1} end={1200} /></div>
        <div class="stat-desc text-white">↘︎ 90 (14%)</div>
      </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-pink-400 font-semibold py-4">
            Subscribe
        </h3>
        <p class="text-md  dark:text-pink-400 py-4">
            Let us help you level up your search engine game, explore our solutions for digital marketing for your business.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
        <div class="stat">
        <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Total Likes</div>
    <div class="stat-value text-primary"><CountUp delay={1} end={20000} /></div>
    <div class="stat-desc">21% more than last month</div>
      </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-amber-400 font-semibold  py-4">
        Total Likes
        </h3>
        <p class="text-md  text-amber-400 py-4">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
        <div class="flex-shrink-0">
        <div class="stat">
        <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Page Views</div>
    <div class="stat-value text-secondary"><CountUp delay={1} end={25600} /></div>
    <div class="stat-desc">21% more than last month</div>
      </div>
        </div>
        <h3 class="text-2xl sm:text-xl text-amber-400 font-semibold  py-4">
        Page Views
        </h3>
        <p class="text-md  text-amber-400 py-4">
            Encompassing today’s website design technology to integrated and build solutions relevant to your business.
        </p>
    </div>
</div>
        // <CountUp delay={3} end={250} />k</div>
    );
};

export default Count;