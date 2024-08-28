import Subheader from "../components/Subheader/Subheader";
import Location from "../components/Location/Location";
import ContactComponent from "../components/ContactComponent/ContactComponent";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Subheader header="Contact Us" />
      <Location />
      <ContactComponent />
      <Footer />
    </>
  );
};

export default Contact;
