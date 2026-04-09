

import { useState, useEffect } from "react";
import { Link } from "react-router";
function Hero1() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open)
  }
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll")
    }
    else {
      document.body.classList.remove("no-scroll")
    }
  }, [open])
  return (
    <div className="hero1-container">
      <div className="navBar">
        <div className="navImage">
          <img
            src="https://i.ibb.co/v41yK3Dz/Logo-d39aec24-b217-4f53-87ef-d39c0ab57622.png"
            alt="Logo"
          />
        </div>
        <div className="navLinks">
          <Link to={"/"} className="link">Home</Link>
          <Link to={"/about-us"} className="link">About</Link>
          <Link className="link">Services</Link>
          <Link className="link">Membership</Link>
        </div>
        <div className="navButton">
          <Link className="login" >Login</Link>
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      </div>
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="navImages">
          <img
            src="https://i.ibb.co/v41yK3Dz/Logo-d39aec24-b217-4f53-87ef-d39c0ab57622.png"
            alt="Logo"
          />
        </div>
        <div className="close-btn" onClick={toggleSidebar}>
          ✕
        </div>
        <Link to={"/"} className="side-link">
          Home
        </Link>
        <Link to={"/about-us"} className="side-link">
          About
        </Link>
        <Link className="side-link">
          Services
        </Link>
        <Link className="side-link">
          Contact
        </Link>
        <div className="side-buttons">
          <Link className="login">Login</Link>
        </div>
      </div>
      {open && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}
export default Hero1;