import React from "react";
import { Link } from "react-router-dom";
import mac from "../../Asset/mac.jpg";

const Slider = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 mt-20 gap-y-15">
      <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
        bis_skin_checked="1">
        <img src="https://149367133.v2.pressablecdn.com/wp-content/uploads/2016/10/MacBook-Pro-thickness.gif"
          alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
        <div class="flex flex-col justify-between p-6 space-y-8" bis_skin_checked="1">
          <div class="space-y-2" bis_skin_checked="1">
            <h2 class="text-3xl font-semibold tracking-wide">Laptop</h2>
          </div>
          <Link to='/macbook'><button class="btn btn-outline btn-secondary">Explore More</button></Link>
        </div>
      </div>
      <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
        bis_skin_checked="1">
        <img src="https://c.tenor.com/hXAeoM2OMcIAAAAC/apple-apple-iphone.gif"
          alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
        <div class="flex flex-col justify-between p-6 space-y-8" bis_skin_checked="1">
          <div class="space-y-2" bis_skin_checked="1">
            <h2 class="text-3xl font-semibold tracking-wide">Iphone</h2>
          </div>
          <Link to='/iphone'><button class="btn btn-outline btn-secondary">Explore More</button></Link>
        </div>
      </div>
      <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
        bis_skin_checked="1">
        <img src="https://techcrunch.com/wp-content/uploads/2019/02/samsung-fold.gif?w=730&crop=1"
          alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
        <div class="flex flex-col justify-between p-6 space-y-8" bis_skin_checked="1">
          <div class="space-y-2" bis_skin_checked="1">
            <h2 class="text-3xl font-semibold tracking-wide">Samsung</h2>
          </div>
          <Link to='/samsung'><button class="btn btn-outline btn-secondary">Explore More</button></Link>
        </div>
      </div>
      <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
        bis_skin_checked="1">
        <img src="https://techring.in/wp-content/uploads/2022/06/oneplus-9-pro-thumb_800x448-600x400-1.gif"
          alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
        <div class="flex flex-col justify-between p-6 space-y-8" bis_skin_checked="1">
          <div class="space-y-2" bis_skin_checked="1">
            <h2 class="text-3xl font-semibold tracking-wide">One-Plus</h2>
          </div>
          <Link to='/oneplus'><button class="btn btn-outline btn-secondary">Explore More</button></Link>
        </div>
      </div>
      <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
        bis_skin_checked="1">
        <img src="https://i.gifer.com/JtyY.gif"
          alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
        <div class="flex flex-col justify-between p-6 space-y-8" bis_skin_checked="1">
          <div class="space-y-2" bis_skin_checked="1">
            <h2 class="text-3xl font-semibold tracking-wide">Smart Watch</h2>
          </div>
          <Link to='/watch'><button class="btn btn-outline btn-secondary">Explore More</button></Link>
        </div>
      </div>
      <div class="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
        bis_skin_checked="1">
        <img src="https://thumbs.gfycat.com/HighMadCurlew-size_restricted.gif"
          alt="" class="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"/>
        <div class="flex flex-col justify-between p-6 space-y-8" bis_skin_checked="1">
          <div class="space-y-2" bis_skin_checked="1">
            <h2 class="text-3xl font-semibold tracking-wide">Air-Pods</h2>
          </div>
          <Link to='/airpods'> <button class="btn btn-outline btn-secondary">Explore More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
