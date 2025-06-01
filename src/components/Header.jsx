import React from "react";
import imageLogo from "../assets/logo.jpg";
import Button from "./UI/Button";
const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={imageLogo} alt="A Restaurant" />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
