import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Immerse yourself in a world of exceptional amenities and services.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/library.png" alt="" />
          <h3>World Class Library</h3>
          <p>
            Dive into a sea of knowledge with our state-of-the-art library. An
            oasis for intellectual exploration.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/basketball.png" alt="" />
          <h3>Largest Play Ground</h3>
          <p>
            Unleash your energy on our expansive playground. A haven for sports
            enthusiasts and active minds.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/cafeteria.png" alt="" />
          <h3>Tasty and Healthy Food</h3>
          <p>
            Indulge your taste buds with our delightful and nutritious cuisine.
            Fuel for both body and mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
