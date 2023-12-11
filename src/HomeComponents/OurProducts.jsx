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
    <div className="mx-auto mt-8 flex w-11/12 flex-col items-center">
      <h1 className="ms-9 self-start  text-sm font-semibold leading-3 text-red-500">
        our Products
      </h1>
      <h1 className="row-start-2 ms-9 self-start text-2xl font-semibold">
        explore our products
      </h1>

      <div className="grid grid-cols-1 items-center justify-center  gap-x-[3.8rem] space-y-6 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
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

function ProductExplore({ img, heading, rate, rating }) {
  const iconStyle =
    "bg-white rounded-[50%] w-6 h-6 flex justify-center items-center";
  return (
    <div className="flex flex-col ">
      <div className=" group relative flex h-[13rem] w-[15rem] items-center justify-center space-x-3 rounded-lg bg-[#F5F5F5] hover:cursor-pointer">
        <img src={img} alt="remote" className={` w-28`} />
        <div className="absolute right-3 top-2 flex flex-col space-y-4">
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className={iconStyle}>
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-3 font-[500] ">{heading}</h1>
        <div className="flex space-x-3">
          <span className="font-[500] text-red-500">{rate}</span>

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
