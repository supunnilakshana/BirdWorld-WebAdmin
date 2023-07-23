import React from "react";
import "./navbar.scss";

import { BiSearchAlt2 } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

import image from "../../assets/prof.jpg";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <BiSearchAlt2 className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <GrLanguage className="icon" />
            English
          </div>
          <div className="item">
            <MdDarkMode
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <IoMdNotifications className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img src={image} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
