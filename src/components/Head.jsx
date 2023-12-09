import { Link } from "react-router-dom";
function Head() {
  return (
    <div>
      <div className="flex bg-black text-white  justify-center h-11 items-center relative">
        <p className="justify-self-center font-poppins text-[9px] sm:text-[12px] md:text-sm lg:text-[1rem] font-[400]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link
          to=""
          className="bg-transparent  mx-5 sm:text-[12px] md:text-sm text-[9px] lg:text-[1rem] font-semibold underline underline-offset-4 font-poppins"
        >
          shop now
        </Link>
        <select className="bg-transparent focus:outline-none text-[9px] sm:text-[12px] md:text-sm lg:text-[1rem] tracking-wide absolute top-[22%] lg:right-[10%] sm:right-[5%] right-2 font-poppins">
          <option value="eng">Eng</option>
        </select>
      </div>
    </div>
  );
}

export default Head;
