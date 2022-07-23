import React from 'react';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./Animated.css"
const content = [
  {
    title: "Iphone",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Create_Story___IndiaToday_-_Go.png?I3AFQ37zCo6mDPkRr708aqbMK9NOAlgK&size=770:433",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Samsung",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://cdn.mos.cms.futurecdn.net/JusERMBRpcLiHLnzK6omtb.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "One Plus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://c0.wallpaperflare.com/preview/730/146/437/communication-memory-card-micro-simcard-oneplus.jpg"
  },
  {
    title: "Watch",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://cdn.shopify.com/s/files/1/0089/7843/2096/products/watch7_film_touch_1024x1024@2x.jpg?v=1640134714",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "AirPods",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://www.soundguys.com/wp-content/uploads/2018/03/Airpods-2-4-e1625058802898.jpg"
  },
  {
    title: "Macbook",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia  nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://images.macrumors.com/t/Z76MviY7k_i9tgNAS9cQ34UTbBk=/1600x0/article-new/2020/03/macbook-pro-13-inch.jpg",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },

];

const Animated = () => {
  return (
    <div>
      <h1>Your Fevourute Item</h1>
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

export default Animated;