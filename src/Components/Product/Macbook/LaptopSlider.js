import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../Home/Animated.css"
const content = [
    {
      title: "Laptop",
      image: "https://imageio.forbes.com/specials-images/imageserve/6213c2a05ed1f7de596d35b4/Apple-Brand-M1-Model-Macbook-pro-with-colorful-light-background-/960x0.jpg?format=jpg&width=960",
    },
    {
      title: "Laptop",
      image: "https://www.apple.com/v/macbook-pro-13/l/images/meta/macbook-pro-13_overview__bcsyunk73i2a_og.jpg",
    },
    {
      title: "Laptop",
      image: "https://os-wordpress-media.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/03/14200042/Apple-MacBook-Pro.jpg",
    },
    {
      title: "Laptop",
      image: "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg",
    },
    {
      title: "Laptop",
      image: "https://mobilebulgaria.com/img/cms/537/781537.webp",
    },
    {
      title: "Laptop",
      image: "https://imageio.forbes.com/specials-images/imageserve/62239d44f06c1f3c7579a719/Apple-Brand-M1-Model-Macbook-pro-with-colorful-light-background-/960x0.jpg?format=jpg&width=960",
    },
  ];
  

const LaptopSlider = () => {
    return (
        <div>
            <div>
        <Slider className="slider-wrapper " autoplay={1000}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content shadow-md w-36 card bg-base-200"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1 className='title text-emerald-400'>{item.title}</h1>             
              </div>
            </div>
          ))}
        </Slider>
      </div>
        </div>
    );
};

export default LaptopSlider;