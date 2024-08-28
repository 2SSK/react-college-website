import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Student Says</h1>
      <p>
        Discover what our students have to say about their transformative
        experiences.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img src="/images/user1.jpg" alt="" />
          <div>
            <p>
              &quot;The educational journey here is truly transformative. A
              nurturing environment that fosters both personal and academic
              growth.&quot;
            </p>
            <h3>Christine Berkley</h3>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
              <FontAwesomeIcon icon={faStar} className="empty-star" />
            </div>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="/images/user2.jpg" alt="" />
          <div>
            <p>
              &quot; This institutional goes beyond education; it&apos;s a
              community that nurtures creativity and critical thinking. Truly
              exceptional! &quot;
            </p>
            <h3>David Byer</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
