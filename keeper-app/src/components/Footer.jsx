import React from "react";

const date = new Date();
const yDate = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Copyright {yDate}</p>
    </footer>
  );
};

export default Footer;
