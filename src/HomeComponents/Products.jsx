import { Link } from "react-router-dom";
import { faEye, faHeart, faL, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import remoteImg from "../pictures/remote.png";
import keyboardImg from "../pictures/Keyboard.png";
import LEDImg from "../pictures/LED.png";
import chairImg from "../pictures/chair.png";
import Button from "../components/Button";
import ProductsPage from "./ProductItem";
function Products() {
  return (
    <div className="grid grid-cols-12 grid-rows-[1fr_2fr_5fr_2fr] items-center   mt-[4rem] border-b-2">
      <div className="col-start-2 col-end-8 ">
        <div className="text-red-500 font-extrabold font-poppins ">Today's</div>
      </div>
      <div className="col-start-2   flex items-center justify-between  col-end-8">
        <p className="text-[2.5rem] font-bold">flash sales</p>
        <div className="flex">
          <Times date="days" time="03" dots={true} />
          <Times date="hours" time="23" dots={true} />
          <Times date="minutes" time="19" dots={true} />
          <Times date="seconds" time="56" />
        </div>
      </div>
      <div className="row-start-3 col-start-2 flex col-end-12 space-x-10">
        <ProductsPage
          image={remoteImg}
          heading="HAVIT HV-G92 Gamepad"
          rate={120 + "$"}
          Disrate={160 + "$"}
          rating={88}
          fill={true}
          sale={true}
        />
        <ProductsPage
          image={keyboardImg}
          heading="AK-900 Wired Keyboard"
          rate={960 + "$"}
          Disrate={1160 + "$"}
          rating={75}
          fill={false}
          sale={true}
        />
        <ProductsPage
          image={LEDImg}
          heading="IPS LCD Gaming Monitor"
          rate="370$"
          Disrate="400$"
          rating={99}
          fill={true}
          sale={true}
        />
        <ProductsPage
          image={chairImg}
          chair={true}
          heading="S-Series Comfort Chair "
          rate="375$"
          Disrate="400$"
          rating={96}
          fill={false}
          sale={true}
        />
        <ProductsPage
          image={chairImg}
          chair={true}
          heading="S-Series Comfort Chair "
          rate="375$"
          Disrate="400$"
          rating={96}
          fill={false}
          sale={true}
        />
      </div>
      <div className="row-start-4 justify-center col-start-7 mt-8">
        <Button content="veiw all products" />
      </div>
    </div>
  );
}

function Times({ date, time, dots }) {
  return (
    <div className="flex items-center">
      <div className="font-[500] text-sm">
        {date}
        <br />
        <span className="font-bold text-2xl  ">{time}</span>
      </div>
      {dots && (
        <span className="text-red-500 font-[400] mx-5 text-[2.5rem] ">:</span>
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
