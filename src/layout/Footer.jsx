import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy;
        {new Date().getFullYear()}
        KDEV
      </p>
    </footer>
  );
};

export default Footer;
