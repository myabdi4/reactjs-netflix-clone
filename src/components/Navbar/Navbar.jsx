import React, { useEffect, useRef } from "react";

//CSS
import "./Navbar.css";

//IMAGES AND ICONS
import netflix_logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import dropdown_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase/firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={netflix_logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>Originals</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="icons" />
        <p>HD</p>
        <img src={bell_icon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="" className="profile" />
          <img src={dropdown_icon} alt="" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign out of netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
