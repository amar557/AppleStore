import { Link } from "react-router-dom";
function Head() {
  return (
    <div>
      <div className="flex bg-black text-white justify-center h-11 items-center relative">
        <p className="justify-self-center font-poppins font-[400]">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link
          to=""
          className="bg-transparent space-x-4 mx-5 font-semibold underline underline-offset-4 font-poppins"
        >
          shop now
        </Link>
        <select className="bg-transparent focus:outline-none tracking-wide absolute top-[22%] right-[10%] font-poppins">
          <option value="eng">Eng</option>
        </select>
      </div>
    </div>
  );
}

export default Head;
