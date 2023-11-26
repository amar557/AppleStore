import {
  faHeadphones,
  faSquareCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconsSection() {
  return (
    <div className="flex space-x-10 ms-[7.5rem] gap-20 my-28 font-poppins ">
      <Icon
        icon={<FontAwesomeIcon icon={faTruckFast} />}
        heading="free and fast delivery"
        content="free delivery for all orders over $140"
      />
      <Icon
        icon={<FontAwesomeIcon icon={faHeadphones} />}
        heading="24/7 customer service"
        content="freindky 24/7 customer support"
      />
      <Icon
        icon={<FontAwesomeIcon icon={faSquareCheck} />}
        heading="money back guarantee"
        content="we return money in 30 days "
      />
    </div>
  );
}

function Icon({ icon, heading, content }) {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="text-3xl mb-6 font-bold bg-black text-white p-4 ring-8 ring-slate-300 w-16 h-16 flex items-center justify-center  rounded-[50%]">
        {icon}
      </div>
      <h1 className="font-bold text-xl uppercase">{heading}</h1>
      <p className="text-[12px]">{content}</p>
    </div>
  );
}
export default IconsSection;
