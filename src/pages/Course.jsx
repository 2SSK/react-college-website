import Subheader from "../components/Subheader/Subheader";
import Courses from "../components/Courses/Courses";
import Facilities from "../components/Facilities/Facilities";
import Footer from "../components/Footer/Footer";

const Course = () => {
  return (
    <>
      <Subheader header="Our Courses" />
      <Courses />
      <Facilities />
      <Footer />
    </>
  );
};

export default Course;
