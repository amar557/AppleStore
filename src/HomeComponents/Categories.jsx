import {
  faCamera,
  faClock,
  faDisplay,
  faGamepad,
  faHeadphones,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Categories() {
  return (
    <div className="mt-[4.5rem] border-b-2 pb-7">
      <div className=" w-[84%] mx-auto">
        <div className="text-red-500 text-sm font-bold ">Categories</div>
        <div className="text-black text-3xl font-semibold w-[84] mt-3">
          Browse by Category
        </div>
      </div>
      <div className="flex space-x-8 w-[84%] mx-auto mt-8">
        <Icons icon={<FontAwesomeIcon icon={faMobileScreen} />} text="phones" />
        <Icons icon={<FontAwesomeIcon icon={faDisplay} />} text="phones" />
        <Icons icon={<FontAwesomeIcon icon={faClock} />} text="phones" />
        <Icons icon={<FontAwesomeIcon icon={faCamera} />} text="phones" />
        <Icons icon={<FontAwesomeIcon icon={faHeadphones} />} text="phones" />
        <Icons icon={<FontAwesomeIcon icon={faGamepad} />} text="phones" />
      </div>
    </div>
  );
}

function Icons({ icon, text }) {
  return (
    <div className="group border-2 w-40 rounded-md flex items-center justify-center flex-col h-40 hover:bg-red-500 cursor-pointer transition-all ">
      <div className="text-5xl text-[#504f4f] group-hover:text-white duration-500">
        {icon}
      </div>
      <div className="capitalize group-hover:text-white ">{text}</div>
    </div>
  );
}
export default Categories;
