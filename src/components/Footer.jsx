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
    <div className="bg-black h-[50vh] text-white grid pt-12 grid-cols-13 w-full justify-center  font-poppins  mt-10">
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
    <div className="col-start-2 col-end-4 space-y-5 ">
      <h1 className="text-xl font-bold capitalize">exclusive</h1>
      <h4 className="text-lg ">subscribe</h4>
      <p className="text-sm ">get 10% off your first order</p>
      <input
        type="text"
        placeholder="enter your email"
        className="bg-transparent border-[1px] rounded outline-1  p-1 text-sm placeholder:first-letter:uppercase"
      />
    </div>
  );
}
function Support() {
  return (
    <div className="col-start-4 ms-5 col-end-6 space-y-5 text-sm">
      <h1 className="text-lg font-semibold capitalize">support</h1>
      <p className="text-sm">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
      <p>exclusive@gmail.com</p>
      <p>+88015-88888-9999</p>
    </div>
  );
}
function Account() {
  return (
    <div className="col-start-7 space-y-4 text-sm">
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
    <div className="col-start-8  ms-12 col-end-10 text-sm space-y-4 me-5">
      <h1 className="capitalize text-lg font-semibold">quick link</h1>
      <p>privacy policy</p>
      <p>terms of use</p>
      <p className="uppercase">faq </p>
      <p>contact</p>
    </div>
  );
}
function DownloadApp() {
  return (
    <div className="col-start-10 col-end-12">
      <h1 className="text-xl font-semibold">DownLoad App</h1>
      <p className="text-sm text-slate-300 mt-5">
        Save $3 with App New User Only
      </p>

      <div className="grid grid-rows-2 mt-3 space-x-0 grid-cols-2 justify-start">
        <img src={QRCode} alt=" code " className="row-start-1 row-end-3 " />
        <img src={playStore} alt="playstoreIcon" />
        <img src={appleStore} alt="applestore" />
      </div>
      <div className="flex justify-around mt-4 ">
        <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
        <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
      </div>
    </div>
  );
}
export default Footer;
