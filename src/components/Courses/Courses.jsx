import "./Courses.css";

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>
        Explore our diverse range of courses designed to enhance your learning
        experience.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>Intermediate</h3>
          <p>
            Acquire intermediate skills with our comprehensive courses. Discover
            new horizons in your educational journey.
          </p>
        </div>
        <div className="course-col">
          <h3>Degree</h3>
          <p>
            Pursue a degree that aligns with your passion and career goals.
            Unleash your potential and excel in your chosen field.
          </p>
        </div>
        <div className="course-col">
          <h3>Post Graduation</h3>
          <p>
            Elevate your academic profile with our post-graduation programs.
            Embrace advanced knowledge and excel in your chosen discipline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
