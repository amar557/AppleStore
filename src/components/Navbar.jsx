import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const lInksData = [
  { link: "Home", to: "/" },
  { link: "contact", to: "contact" },
  { link: "about", to: "about" },
  { link: "signup", to: "signUp" },
];

function Navbar() {
  const selection = useSelector((data) => data.cart.cart);
  const navigate = useNavigate();
  function GoToCart() {
    navigate("cart");
  }
  return (
    <div className="mx-auto mb-3  mt-3 flex h-16 w-[84%] items-center justify-between border-b-2 text-xl text-black ">
      <div className=" text-2xl ">exclusive</div>
      <div className=" right-0 top-0  flex-col items-center justify-around space-y-6 pe-6 text-right md:static md:flex md:w-[100%] md:flex-row lg:w-[84%]">
        <ul className=" translate-x-16  items-center  space-x-3  font-poppins font-[400] capitalize md:flex md:text-sm lg:text-lg">
          {lInksData.map((data, i) => (
            <ListOfLink link={data.link} to={data.to} key={i} />
          ))}
        </ul>

        <div className="relative  flex items-center justify-start   text-gray-600  ">
          <input
            type="text"
            name="search"
            placeholder="what are you looking for"
            className="box-border h-8 rounded bg-[#F5F5F5] px-2 py-3 text-sm placeholder:font-poppins focus:border-0  focus:outline-none md:w-40 md:placeholder:text-[10px] lg:w-56 lg:placeholder:text-sm "
            autoComplete="off"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pointer-events-none  absolute right-1 top-2 me-1 text-slate-300"
          />
        </div>

        <div className="space-x-8 text-white lg:text-black xl:space-x-16">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-white hover:cursor-pointer lg:text-black"
          />
          <div onClick={GoToCart}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-white hover:cursor-pointer lg:text-black "
            />
            <span>{selection.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function ListOfLink({ to, link }) {
  return (
    <>
      <li>
        <NavLink to={to}>{link}</NavLink>
      </li>
    </>
  );
}
export default Navbar;
