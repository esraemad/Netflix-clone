import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <img src="./netflix-logo.png" alt="Logo" className="logo" />
        <img src="./hero-banner.png" alt="Hero-Banner" />
        <h1>
          Find Unlimited <span className="text-gradient">Movies</span>, TV shows, and more
        </h1>
      </header>
    </>
  );
};

export default Header;
