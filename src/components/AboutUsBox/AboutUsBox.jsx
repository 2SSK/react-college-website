import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>We are the world&apos;s largest university</h1>
          <p>
            At our unviersity, we take pride in fostering a culture where
            excellence seamlessly interwines with education. Our unwavering
            commitment to delivering a standard of education that exceeds
            expectations os what sets up apart. We believe in the power of
            transformative learning experiences, providing students with the
            skills and knwoledge to thrive n a dynamic world.
          </p>
          <Link to="#" className="hero-btn red-btn">
            EXPLORE NOW
          </Link>
        </div>
        <div className="about-col">
          <img src="images/about.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
