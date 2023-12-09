function ContactForm() {
  const Combinely =
    "  bg-[#F5F5F5] p-2 focus:outline-0 focus:border-slate-500 border placeholder:text-sm text-sm rounded-sm";
  return (
    <div className=" mx-auto w-10/12 p-5 shadow-md md:h-[20.5rem]">
      <form
        action=""
        className="grid grid-cols-3 grid-rows-[1fr_1fr] gap-2 placeholder:capitalize md:grid-rows-[1fr_1fr_5fr] lg:grid-rows-[1fr_5fr] "
      >
        <NameInput Combinely={Combinely} />
        <GmailInput Combinely={Combinely} />
        <PhoneInput Combinely={Combinely} />
        <TextArea Combinely={Combinely} />
      </form>
    </div>
  );
}
function NameInput({ Combinely }) {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="your Name"
        className={`col-start-1 col-end-[-1] md:col-end-2 lg:col-end-2 ${Combinely}`}
      />
    </>
  );
}
function GmailInput({ Combinely }) {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Your email"
        className={`col-start-1 col-end-[-1] md:col-start-2 md:col-end-4 lg:col-start-2 lg:col-end-3${Combinely}`}
      />
    </>
  );
}
function PhoneInput({ Combinely }) {
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="your phone Number"
        className={`col-start-1 col-end-[-1] md:col-start-1 md:col-end-[-1] lg:col-start-3 lg:col-end-4 ${Combinely}`}
      />
    </>
  );
}
function TextArea() {
  return (
    <>
      <textarea
        name=""
        id=""
        cols="30"
        rows="6"
        placeholder="your message"
        className=" col-start-1 col-end-[-1] self-stretch bg-[#F5F5F5] p-2 focus:outline-0"
      ></textarea>
    </>
  );
}
export default ContactForm;
