import {
  faHeadphones,
  faSquareCheck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsData = [
  {
    icon: faTruckFast,
    heading: "free and fast delivery",
    content: "free delivery for all orders over $140",
  },
  {
    icon: faHeadphones,
    heading: "24/7 customer service",
    content: "freindky 24/7 customer support",
  },
  {
    icon: faSquareCheck,
    heading: "money back guarantee",
    content: "we return money in 30 days ",
  },
];
function IconsSection() {
  return (
    <div className="flex justify-center">
      <div className="font-poppinss mx-auto  my-28  flex w-10/12  flex-wrap justify-center gap-20 lg:justify-between    ">
        {iconsData.map((data, i) => (
          <Icon
            icon={data.icon}
            heading={data.heading}
            content={data.content}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

function Icon({ icon, heading, content }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[50%] bg-black p-4 text-3xl font-bold text-white ring-8  ring-slate-300">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h1 className="text-xl font-bold uppercase">{heading}</h1>
      <p className="text-[12px]">{content}</p>
    </div>
  );
}
export default IconsSection;
