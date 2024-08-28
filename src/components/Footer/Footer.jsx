import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
        Comitted to the pursuit of knowledge and the empowerment of individuals,
        our institution stands as a beacon of learning and inspiration. We are
        on a mission to nurture inquisitive minds, encourage creativity, and
        drive positive change. Our dedicated team strives to provide a
        supportive learning environment that fosters personal growth and
        academic ecellence. Join us on a journey of discovery, where education
        transcends boundaries and transforms lives.
      </p>

      <div className="icons">
        <i className="fab fa-facebook-f">
          <FontAwesomeIcon icon={faFacebookF} />
        </i>
        <i className="fab fa-twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </i>
        <i className="fab fa-instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </i>
        <i className="fab fa-linkedin-in">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </i>
      </div>

      <p>
        Made with{" "}
        <i className="far fa-heart">
          <FontAwesomeIcon icon={faHeart} />
        </i>{" "}
        by SSK
      </p>
    </section>
  );
};

export default Footer;
