import "./Campus.css";

const Campus = () => {
  return (
    <section className="campus">
      <h1>Our Global Campus</h1>
      <p>Embark on a journey of knowledge across our global campuses.</p>
      <div className="row">
        <div className="campus-col">
          <img src="/images/london.png" alt="" />
          <div className="layer">
            <h3>LONDON</h3>
          </div>
        </div>

        <div className="campus-col">
          <img src="/images/newyork.png" alt="" />
          <div className="layer">
            <h3>NEW YORK</h3>
          </div>
        </div>
        <div className="campus-col">
          <img src="/images/washington.png" alt="" />
          <div className="layer">
            <h3>WASHINGTON</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
