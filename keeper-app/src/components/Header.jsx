import React from "react";

const Header = () => {
  return (
    <header>
      <h1 style={styleHeader}>Keeper App</h1>
    </header>
  );
};

export default Header;

const styleHeader = {
  display: "flex",
  backgroundColor: "#F5BA13",
  padding: 30,
  color: "white",
  marginTop: 0,
};
