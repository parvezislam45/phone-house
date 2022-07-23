import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "../../Home/Animated.css"
const content = [
  {
    title: "Laptop",
    image: "https://i.ibb.co/x5DnzXh/206.gif",
  },
  {
    title: "Laptop",
    image: "https://i.ibb.co/J5bWMH5/194dd8111947963-600b1a1137be3.gif",
  },
  {
    title: "Laptop",
    image: "https://i.ibb.co/GdqsVBC/1bfb1e9914b17a06abd0ed9b616bd544-original.gif",
  },
  {
    title: "Laptop",
    image: "https://i.ibb.co/0VqBNGQ/206-416.gif",
  },
  {
    title: "Laptop",
    image: "https://i.ibb.co/2yMHRB2/apple-event-apple-watch-smart-watches-gif-find-on-gifer.gif",
  },
  {
    title: "Laptop",
    image: "https://i.ibb.co/BtjHqvh/galaxy-wearable-user-guide-main11.gif",
  },
];

const WatchSlider = () => {
  return (
    <div>
      <div>
        <Slider className="slider-wrapper " autoplay={1700}>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content shadow-md w-36 h-full card bg-base-200"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              {/* <div className="inner">
                <h1 className='title text-emerald-400'>{item.title}</h1>             
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WatchSlider;
