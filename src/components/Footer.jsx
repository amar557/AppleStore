import QRCode from "../pictures/Qrcode 1.png";
import playStore from "../pictures/palyStore.png";
import appleStore from "../pictures/appleStore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="mt-10 grid h-max w-full grid-cols-12 justify-center gap-y-6 bg-black pt-12 font-poppins  text-white  lg:h-[50vh]">
      <Exclusive />

      <Support />
      <Account />
      <QuickLink />
      <DownloadApp />
    </div>
  );
}
function Exclusive() {
  return (
    <div className="col-start-4 col-end-9  space-y-5 sm:col-start-2 sm:col-end-6 lg:col-start-2  lg:col-end-4 ">
      <h1 className="text-xl font-bold capitalize">exclusive</h1>
      <h4 className="text-lg ">subscribe</h4>
      <p className="text-sm ">get 10% off your first order</p>
      <input
        type="text"
        placeholder="enter your email"
        className="rounded border-[1px] bg-transparent p-1  text-sm outline-1 placeholder:first-letter:uppercase"
      />
    </div>
  );
}
function Support() {
  return (
    <div className="col-start-4  col-end-9 mt-5 space-y-5 text-sm sm:col-start-6 sm:col-end-13  lg:col-start-4 lg:col-end-6">
      <h1 className="text-lg font-semibold capitalize">support</h1>
      <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>
  );
}
function Account() {
  return (
    <div className="col-start-4 col-end-9 mt-5 space-y-4 text-sm sm:col-start-2 sm:col-end-5 md:mt-5  lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:ms-16">
      <h1 className="text-lg font-semibold">Account</h1>
      <p>My account</p>
      <p>Login/Register</p>
      <p>cart</p>
      <p>wishList</p>
      <p>Shop</p>
    </div>
  );
}
function QuickLink() {
  return (
    <div className=" col-start-4 col-end-9 me-5 mt-5 space-y-4 text-sm sm:col-start-5 sm:col-end-8 sm:ms-12 md:mt-5 lg:col-start-8 lg:col-end-10">
      <h1 className="text-lg font-semibold capitalize">quick link</h1>
      <p>privacy policy</p>
      <p>terms of use</p>
      <p className="uppercase">faq </p>
      <p>contact</p>
    </div>
  );
}
function DownloadApp() {
  return (
    <div className="col-start-4 col-end-9 mt-5 sm:col-start-8 sm:col-end-11 md:mt-5  lg:col-start-10 lg:col-end-12">
      <h1 className="text-xl font-semibold">DownLoad App</h1>
      <p className="mt-5 text-sm text-slate-300">
        Save $3 with App New User Only
      </p>

      <div className="mt-3 grid grid-cols-2 grid-rows-2 justify-start space-x-0">
        <img src={QRCode} alt=" code " className="row-start-1 row-end-3 " />
        <img src={playStore} alt="playstoreIcon" />
        <img src={appleStore} alt="applestore" />
      </div>
      <div className="mt-4 flex justify-around ">
        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
        <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
      </div>
    </div>
  );
}
export default Footer;
