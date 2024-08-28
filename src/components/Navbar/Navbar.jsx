import "./Navbar.css";

import { useRef } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "/images/logo.png";

const Navbar = () => {
  const navLinkRef = useRef();

  const showMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "0";
    }
  };

  const hideMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "-200px";
    }
  };

  return (
    <nav>
      <Link to="/">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </Link>

      <div className="nav-links" id="navLinks">
        <i className="fas fa-times" onClick={hideMenu}>
          <FontAwesomeIcon icon={faTimes} onClick={hideMenu} />
        </i>
        <ul>
          <li>
            <Link to="/">
              <a href="/">HOME</a>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <a href="/about">ABOUT</a>
            </Link>
          </li>
          <li>
            <Link to="/course">
              <a href="/course">COURSE</a>
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <a href="/blog">BLOG</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a href="/contact">CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>

      <i className="fas fa-bars" onClick={showMenu}>
        <FontAwesomeIcon icon={faBars} onClick={showMenu} />
      </i>
    </nav>
  );
};

export default Navbar;
