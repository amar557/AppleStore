import {
  faCamera,
  faClock,
  faDisplay,
  faGamepad,
  faHeadphones,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconsData = [
  {
    icon: faMobileScreen,
    text: "phones",
  },
  {
    icon: faMobileScreen,
    text: "phones",
  },
  {
    icon: faMobileScreen,
    text: "phones",
  },
  {
    icon: faMobileScreen,
    text: "phones",
  },
  {
    icon: faMobileScreen,
    text: "phones",
  },
  {
    icon: faMobileScreen,
    text: "phones",
  },
];

function Categories() {
  return (
    <div className="mx-auto mt-[4.5rem] w-10/12 border-b-2 pb-7">
      <div className=" mx-auto ">
        <div className="text-start text-sm font-bold text-red-500 ">
          Categories
        </div>
        <div className="mt-3 w-[84] text-lg font-semibold text-black md:text-3xl">
          Browse by Category
        </div>
      </div>
      <div className="mx-auto ms-auto mt-8 grid  grid-cols-1 grid-rows-6 items-start justify-center space-y-3 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-x-8 md:space-x-8 lg:grid-cols-6 lg:grid-rows-1">
        {iconsData.map((data, i) => (
          <Icons icon={data.icon} text={data.text} key={i} />
        ))}
      </div>
    </div>
  );
}

function Icons({ icon, text }) {
  return (
    <div className="group m-auto flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-md border-2 transition-all hover:bg-red-500 ">
      <div className="text-5xl text-[#504f4f] duration-500 group-hover:text-white">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="capitalize group-hover:text-white ">{text}</div>
    </div>
  );
}
export default Categories;
