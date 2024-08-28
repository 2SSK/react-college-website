import "./Header.css";

import Navbar from "../Navbar/Navbar";
import TextBox from "../TextBox/TextBox";

const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <TextBox />
    </section>
  );
};

export default Header;
