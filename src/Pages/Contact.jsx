import ContactForm from "../components/ContactForm";
import Contactus from "../components/Contactus";

function ContactPage() {
  return (
    <div className="mx-auto mt-20 flex w-11/12 flex-col  md:flex-row md:gap-x-4 lg:w-10/12">
      <Contactus />
      <ContactForm />
    </div>
  );
}

export default ContactPage;
