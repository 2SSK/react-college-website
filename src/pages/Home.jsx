import Header from "../components/Header/Header";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";
import Facilities from "../components/Facilities/Facilities";
import Testimonials from "../components/Testimonials/Testimonials";
import Cta from "../components/Cta/Cta";

const Home = () => {
  return (
    <>
      <Header />
      <Courses />
      <Facilities />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
