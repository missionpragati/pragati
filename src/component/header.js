// Header.js

import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="../">
          <Image
            src="/logo.jpeg"
            alt="Logo"
            width="120"
            height="120"
          />
        </a>
      </div>
      <div className="navbar-toggle">
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <nav className="navbar-links">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Home Page</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};




export default Header;