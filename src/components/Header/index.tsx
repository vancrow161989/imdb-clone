import React from "react";
import Navbar from "./Navbar";
import HeaderLinks from "./HeaderLinks";

function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <Navbar />
          <HeaderLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
