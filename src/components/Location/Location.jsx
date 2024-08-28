import "./Location.css";

const location =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.577628543316!2d76.16758731948549!3d30.730272329949855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39100dbeceaf6095%3A0x1a1509f48e0efb3d!2sGGI%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1703595732828!5m2!1sen!2sin";

const Location = () => {
  return (
    <section className="location">
      <iframe
        src={location}
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Location;
