import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contactus() {
  return (
    <div className="mx-auto mb-5 w-10/12 p-2 font-poppins shadow-md md:w-2/4">
      <div>
        <CallUs />
      </div>
    </div>
  );
}
function CallUs() {
  return (
    <div>
      <div className=" my-4  border-b-2 p-4 ">
        <div className="mb-3">
          <span className="rounded-[50%] bg-red-500 p-2 text-white">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="ms-3 font-semibold">Call to us</span>
        </div>
        <p className="mt-2 text-sm">We are available 24/7, 7 days a week. </p>
        <p className="mt-2 text-sm">Phone: +8801611112222</p>
      </div>
      <div className="my-4 p-4">
        <div className="mb-3">
          <span className="rounded-[50%] bg-red-500 p-2 text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="ms-3 font-semibold">write to us</span>
        </div>
        <p className="mt-2 text-sm">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="mt-2 text-sm">Emails: customer@exclusive.com</p>
        <p className="mt-2 text-sm">Emails: customer@exclusive.com</p>
      </div>
    </div>
  );
}
export default Contactus;
