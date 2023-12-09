import { Link } from "react-router-dom";
import iphoneLogo from "../pictures/Apple.png";
import iphone from "../pictures/1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

function Main() {
  return (
    <div className="flex divide-stone-800 mx-16 mt-10 items-center justify-around h-[344px] font-[400] font-poppins">
      <div className="col-start-5 col-end-6 divide-x-5 divide-slate-500">
        <ul className="mb-2 space-y-3 border-r-2 pe-5">
          <li>women's fashion</li>
          <li>men's fashion</li>
          <li>electronic </li>
          <li>home and lifestyle</li>
          <li>medicine</li>
          <li>sports and outdoor</li>
          <li>bady's and toys</li>
          <li>groceries & pets</li>
          <li>health & beauty</li>
        </ul>
      </div>
      <div className=" flex bg-black text-white w-[892px] h-[344px]">
        <Swiper
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <VoucherSlider />
          </SwiperSlide>

          <SwiperSlide>
            <VoucherSlider />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

function VoucherSlider() {
  return (
    <div
      div
      className="flex  p-6
    items-center justify-around"
    >
      <div>
        <div className="flex items-center space-x-4 ">
          <img src={iphoneLogo} alt="pic" />
          <p>iphone 14 series</p>
        </div>
        <h1 className="text-[3.5rem] font-boid leading-[4rem]">
          up to 10% <br /> off voucher
        </h1>
        <div className="space-x-2 hover:space-x-4 transition-all duration-1000 hover:cursor-pointer">
          <Link className="text-[1rem] border-b-2 space-y-2">shop now</Link>
          <FontAwesomeIcon icon={faArrowRight} className="text-[.8rem]" />
        </div>
      </div>
      <img src={iphone} alt="kuch b" />
    </div>
  );
}
export default Main;
