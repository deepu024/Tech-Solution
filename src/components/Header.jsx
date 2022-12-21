import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Tech Solution</h1>
      <main>
        <HashLink className="nav-a" to={"/#home"}>Home</HashLink>
        <Link className="nav-a" to={"/contact"}>Contact</Link>
        <HashLink className="nav-a" to={"/#about"}>About</HashLink>
        <HashLink className="nav-a" to={"/#brands"}>Brands</HashLink>
        <Link className="nav-a" to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
