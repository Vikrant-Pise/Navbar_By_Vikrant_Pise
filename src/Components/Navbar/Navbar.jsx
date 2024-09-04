import React from "react";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toogle_light from "../../assets/night.png";
import toogle_dark from "../../assets/day.png";
import my_logo from '../../assets/logo.png';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="w-full min-h-screen bg-[#ced8ff] dark:bg-[#1e1e1e]">
      <div className="w-full flex items-center justify-between bg-white dark:bg-[#333] p-[15px] px-[7%]">
        <img
          src={theme === "light" ? logo_light : logo_dark}
          alt="logo"
          className="w-[160px] cursor-pointer"
        />

        <ul className="flex-1 text-center">
          <li className="inline-block mx-5 my-2.5 text-lg cursor-pointer text-black dark:text-white">
            Home
          </li>
          <li className="inline-block mx-5 my-2.5 text-lg cursor-pointer text-black dark:text-white">
            Product
          </li>
          <li className="inline-block mx-5 my-2.5 text-lg cursor-pointer text-black dark:text-white">
            Feature
          </li>
          <li className="inline-block mx-5 my-2.5 text-lg cursor-pointer text-black dark:text-white">
            About
          </li>
        </ul>

        <div className="flex items-center bg-[#242424] dark:bg-[#444] p-3 px-5 rounded-full ">
          <input
            type="text"
            placeholder="Search"
            className="p-2 bg-transparent text-white max-w-[200px] text-[18px] placeholder-white"
          />

          <img
            src={theme === "light" ? search_icon_light : search_icon_dark}
            alt="Search image"
            className="w-7 cursor-pointer"
          />
        </div>

        <img
          onClick={toggle_mode}
          src={theme === "light" ? toogle_light : toogle_dark}
          alt=""
          className="w-[50px] cursor-pointer ml-[40px]"
        />

        
        <img
          src={my_logo}
          alt="Placeholder logo"
          className="logo-placeholder"
        />
      </div>
    </div>
  );
};

export default Navbar;
