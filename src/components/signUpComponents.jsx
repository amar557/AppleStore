import signUpImg from "../pictures/signUp.png";
import googleIcon from "../pictures/google Icon.png";
import Button from "./Button";
import { Link } from "react-router-dom";
function SignUpComponents() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-x-5 font-poppins">
      <LoginImg />
      <LoginForm />
    </div>
  );
}

function LoginImg() {
  return (
    <div>
      <img src={signUpImg} alt="" className="h-64 md:h-auto" />
    </div>
  );
}
function LoginForm() {
  return (
    <div className="flex   items-center justify-center">
      <div className="w-11/12 space-y-1 md:w-10/12 md:space-y-3 lg:space-y-5">
        <h1 className="text-sm font-semibold md:text-2xl md:font-bold">
          Create an account
        </h1>
        <p className="text-[11px] md:text-lg">Enter your details below</p>
        <input
          type="text"
          placeholder="Name"
          className="block w-full border-b-2 px-1 placeholder:text-[11px]  focus:outline-0 md:placeholder:text-sm lg:py-2"
        />
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="block w-full border-b-2 px-1 placeholder:text-[11px] focus:outline-0 md:placeholder:text-sm  lg:py-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full border-b-2 px-1 placeholder:text-[11px]  focus:outline-0 md:placeholder:text-sm lg:py-2"
        />
        <Button content="create account" w="full" />
        <button className="flex w-full items-center justify-center gap-x-2 border-2 px-1 py-1 md:gap-x-5 md:py-2">
          <img src={googleIcon} alt="" className="w-5" />
          <span className="text-[10px] md:text-sm lg:text-lg">
            sign up with google
          </span>
        </button>
        <div className="flex w-full flex-col items-center justify-center text-[11px] sm:flex-row  sm:gap-x-3">
          <span className="text-[11px] sm:text-xs md:text-sm">
            already have an account ?
          </span>
          <Link className="border-b-2  hover:cursor-pointer md:text-sm">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SignUpComponents;
