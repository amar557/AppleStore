import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Star } from "./Products";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProductsPage({
  image,
  heading,
  chair,
  rate,
  Disrate,
  fill,
  rating,
  sale,
  cartBtn = true,
}) {
  const iconStyle =
    "bg-white rounded-[50%] w-6 h-6 flex justify-center items-center";
  return (
    <div className="flex flex-col ">
      <div className=" group bg-[#F5F5F5] w-[15rem] hover:cursor-pointer h-[15rem] space-x-3 flex items-center justify-center relative rounded-lg">
        <img
          src={image}
          alt="remote"
          className={`${chair ? "w-30" : "w-40"}`}
        />
        {cartBtn && (
          <div className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100  transition-all duration-500 text-center bg-black text-white w-[100%] rounded-b-lg py-1">
            <Link className="capitalize ">Add to cart</Link>
          </div>
        )}
        <div className="absolute top-2 right-3 space-y-4 flex flex-col">
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
        {sale && (
          <div className="bg-red-500 text-white text-[9px] absolute top-3 left-3 p-1 rounded">
            -15%
          </div>
        )}
      </div>
      <div>
        <h1 className="font-[500] my-3 ">{heading}</h1>
        <div className="space-x-3">
          <span className="text-red-500 font-[500]">{rate}</span>
          <span className="line-through text-[#bfb5b5]">{Disrate}</span>
        </div>
        <div className="flex">
          <Star fill={fill} />
          <span className="ms-2">({rating})</span>
        </div>
      </div>
    </div>
  );
}
