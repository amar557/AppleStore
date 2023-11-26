import { Star } from "./Products";
import dogFoodImg from "../pictures/dryDog.png";
import camera from "../pictures/camer.png";
import LaptopImg from "../pictures/Laptop.png";
import CurologyKitImg from "../pictures/Curology.png";
import KidCarImg from "../pictures/KidsCar.png";
import shoesImg from "../pictures/shoes.png";
import jacketImg from "../pictures/jacket.png";
import RemoteImg from "../pictures/remoted.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    pic: dogFoodImg,
    heading: "bread dry dog food",
    rate: "$100",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 35,
  },
  {
    pic: camera,
    heading: "canon DOS DSLR Camera",
    rate: "$360",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 95,
  },
  {
    pic: LaptopImg,
    heading: "ASUS FHD Gaming Laptop",
    rate: "$700",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 325,
  },
  {
    pic: CurologyKitImg,
    heading: "Curology Product Set",
    rate: "$500",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 145,
  },
  {
    pic: KidCarImg,
    heading: "Kids Electric Car ",
    rate: "$960",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 65,
  },
  {
    pic: shoesImg,
    heading: "jr zoom soccer cleats",
    rate: "$1160",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 35,
  },
  {
    pic: RemoteImg,
    heading: "GP11 shooter USB Gamepad ",
    rate: "$660",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 55,
  },
  {
    pic: jacketImg,
    heading: "Quilted satin jacket",
    rate: "$660",
    icon1: <FontAwesomeIcon icon={faHeart} />,
    icone2: <FontAwesomeIcon icon={faEye} />,
    rating: 55,
  },
];
function OurProducts() {
  return (
    <div className="grid grid-cols-12 grid-rows-[0.5fr_0.5fr_4fr] mt-8">
      <h1 className="text-sm leading-3  text-red-500 font-semibold col-start-2 col-end-12">
        our Products
      </h1>
      <h1 className="text-2xl font-semibold row-start-2 col-start-2 col-end-12">
        explore our products
      </h1>
      {/* <div>
        {/* {data.map((item, i) => (
          <ProductsPage
            key={i}
            image={item.pic}
            heading={item.heading}
            chair={false}
            rate={item.rate}
            Disrate=""
            rating={true}
            cartBtn={false}
          />
        ))} */}
      {/* </div> */} */
      <div className="col-start-2 col-end-13 flex flex-wrap gap-x-[3.8rem] space-y-6">
        {data.map((item, i) => (
          <ProductExplore
            key={i}
            img={item.pic}
            heading={item.heading}
            rate={item.rate}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
// image,
// heading,
// chair,
// rate,
// Disrate,
// fill,
// rating,
// sale,
// cartBtn = true,
function ProductExplore({ img, heading, rate, rating }) {
  const iconStyle =
    "bg-white rounded-[50%] w-6 h-6 flex justify-center items-center";
  return (
    <div className="flex flex-col ">
      <div className=" group bg-[#F5F5F5] w-[15rem] hover:cursor-pointer h-[13rem] space-x-3 flex items-center justify-center relative rounded-lg">
        <img src={img} alt="remote" className={` w-28`} />
        <div className="absolute top-2 right-3 space-y-4 flex flex-col">
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-[500] my-3 ">{heading}</h1>
        <div className="flex space-x-3">
          <span className="text-red-500 font-[500]">{rate}</span>

          <span className="flex">
            <Star />
            <span className="ms-2">({rating})</span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default OurProducts;
