import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>World&apos;s Biggest University</h1>
      <p>
        Making website is now one of the easiest thing in the world. You just
        need to learn HTML, CSS, <br /> JavaScript and you are good to go.
      </p>
      <Link to="/" className="hero-btn">
        Visit us To Know More
      </Link>
    </div>
  );
};

export default TextBox;
