import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Star } from "./Products";
import { faEye, faHeart, faL } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ProductsPage({
  image,
  heading,
  chair = false,
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
      <div className=" group relative flex h-[15rem] w-[15rem] items-center justify-center space-x-3 rounded-lg bg-[#F5F5F5] hover:cursor-pointer">
        <img
          src={image}
          alt="remote"
          className={`${chair ? "w-30" : "w-40"}`}
        />

        {cartBtn && (
          <div className="absolute bottom-0 right-0 w-[100%] rounded-b-lg  bg-black py-1 text-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
            <Link className="capitalize ">Add to cart</Link>
          </div>
        )}
        <div className="absolute right-3 top-2 flex flex-col space-y-4">
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
        {sale && (
          <div className="absolute left-3 top-3 rounded bg-red-500 p-1 text-[9px] text-white">
            -15%
          </div>
        )}
      </div>
      <div>
        <h1 className="my-3 font-[500] ">{heading}</h1>
        <div className="space-x-3">
          <span className="font-[500] text-red-500">{rate}</span>
          <span className="text-[#bfb5b5] line-through">{Disrate}</span>
        </div>
        <div className="flex">
          <Star fill={fill} />
          <span className="ms-2">({rating})</span>
        </div>
      </div>
    </div>
  );
}
