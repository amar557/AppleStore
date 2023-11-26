import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <div className="grid grid-cols-12  text-black h-16 items-center text-xl  mt-3 border-b-2 mb-3 ">
      <div className="col-start-2 text-2xl">exclusive</div>
      <ul className="flex col-start-5 col-end-9 gap-x-5 capitalize text-lg font-[400] font-poppins">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="contact">contact</Link>
        </li>
        <li>
          <Link to="about">about</Link>
        </li>
        <li>
          <Link to="signUp">sign up</Link>
        </li>
      </ul>

      <div className="flex  relative text-gray-600 items-center   justify-end col-start-10 col-end-11 ">
        <input
          type="text"
          name="search"
          placeholder="what are you looking for"
          className="rounded px-2 py-3 box-border h-8 focus:border-0 text-sm w-20  focus:outline-none placeholder:text-sm placeholder:font-poppins bg-[#F5F5F5] "
          autoComplete="off"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute  text-slate-300 pointer-events-none me-1"
        />
      </div>
      <div>
        <div className="text-black col-start-12  space-x-16 ">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-black hover:cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="text-black hover:cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
