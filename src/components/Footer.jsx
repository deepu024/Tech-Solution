import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Tech Solution</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <Link to="#" target={"blank"}>
            LinkedIn
          </Link>
          <Link to="#" target={"blank"}>
            Github
          </Link>
          <Link to="#" target={"blank"}>
            Leetcode
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
