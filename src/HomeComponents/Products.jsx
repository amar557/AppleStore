import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import remoteImg from "../pictures/remote.png";
import keyboardImg from "../pictures/Keyboard.png";
import LEDImg from "../pictures/LED.png";
import chairImg from "../pictures/chair.png";
import Button from "../components/Button";
import ProductsPage from "./ProductItem";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
const data = [
  {
    img: remoteImg,
    heading: "HAVIT HV-G92 Gamepad",
    rate: "$120",
    Disrate: "$160",
    fill: true,
    sale: true,
  },
  {
    img: keyboardImg,
    heading: "AK-900 Wired Keyboard",
    rate: "$960",
    Disrate: "$1160",
    fill: true,
    sale: true,
  },
  {
    img: LEDImg,
    heading: "IPS LCD Gaming Monitor",
    rate: "$370",
    Disrate: "$400",
    fill: true,
    sale: true,
  },
  {
    img: chairImg,
    heading: "S-Series Comfort Chair",
    rate: "$375",
    Disrate: "$400",
    fill: true,
    sale: true,
    chair: true,
  },
  {
    img: chairImg,
    heading: "S-Series Comfort Chair",
    rate: "$375",
    Disrate: "$400",
    fill: true,
    sale: true,
    chair: true,
  },
];

const dataAndTime = [
  {
    date: "days",
    time: "03",
    dots: true,
  },
  {
    date: "hours",
    time: "23",
    dots: true,
  },
  {
    date: "minutes",
    time: "19",
    dots: true,
  },
  {
    date: "seconds",
    time: 45,
    dots: false,
  },
];
function Products() {
  return (
    <div className="mt-[4rem] grid grid-cols-12 grid-rows-[1fr_2fr_5fr_2fr]   items-center border-b-2">
      <div className="col-start-2 col-end-8 ">
        <div className="font-poppins font-extrabold text-red-500 ">Today's</div>
      </div>
      <div className="col-start-2   col-end-8 flex items-center  justify-between">
        <p className="text-[2.5rem] font-bold">flash sales</p>
        <div className="flex">
          {dataAndTime.map((data, i) => (
            <Times key={i} date={data.date} time={data.time} dots={data.dots} />
          ))}
        </div>
      </div>
      <div className="col-start-2 col-end-12 row-start-3 flex space-x-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {data.map((data, i) => (
            <SwiperSlide key={i}>
              <ProductsPage
                key={i}
                image={data.img}
                heading={data.heading}
                rate={data.rate}
                Disrate={data.Disrate}
                fill={data.fill}
                sale={data.sale}
                chair={data.chair}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
     
      </Swiper> */}
      </div>

      <div className="col-start-7 row-start-4 mt-8 justify-center">
        <Button content="veiw all products" />
      </div>
    </div>
  );
}

function Times({ date, time, dots }) {
  return (
    <div className="flex items-center">
      <div className="text-sm font-[500]">
        {date}
        <br />

        <span className="text-2xl font-bold  ">{time}</span>
      </div>
      {dots && (
        <span className="mx-5 text-[2.5rem] font-[400] text-red-500 ">:</span>
      )}
    </div>
  );
}

export function Star({ fill }) {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} className="text-[#FFAD33]" />
      <FontAwesomeIcon icon={faStar} className="text-[#FFAD33]" />
      <FontAwesomeIcon icon={faStar} className="text-[#FFAD33]" />
      <FontAwesomeIcon icon={faStar} className="text-[#FFAD33]" />
      <FontAwesomeIcon
        icon={faStar}
        className={`${fill ? "text-[#FFAD33]" : "text-[#bfb5b5]"}`}
      />
    </div>
  );
}
export default Products;
