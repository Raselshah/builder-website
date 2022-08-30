import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import icon1 from "../../Assest/element-2 1.png";
import icon2 from "../../Assest/chart-square.png";
import icon3 from "../../Assest/personalcard.png";
import icon4 from "../../Assest/message_1_fill.png";
import icon5 from "../../Assest/user-square.png";
import icon6 from "../../Assest/calendar.png";
import icon7 from "../../Assest/frame.png";
import icon8 from "../../Assest/setting-2.png";

import "../Style/Style.css";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="sticky top-0 w-56 bg-base-100 h-screen pt-16  duration-300 border-r-2 border-gray-100 shadow-lg">
        <ul className="">
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Dashboard" src={icon1} alt="" />
              <span className="origin-left duration-200">Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Property" src={icon2} alt="" />
              <span className="origin-left duration-200">Property</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Lead" src={icon3} alt="" />
              <span className="origin-left duration-200">Lead</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Chat" src={icon4} alt="" />
              <span className="origin-left duration-200">Chat</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Sales Partner" src={icon5} alt="" />
              <span className="origin-left duration-200">Sales Partner</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Calendar" src={icon6} alt="" />
              <span className="origin-left duration-200">Calendar</span>
            </Link>
          </li>

          <div className="border-dot mt-12"></div>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md mt-12 px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Profile" src={icon7} alt="" />
              <span className="origin-left duration-200">Profile</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4"
            >
              <img title="Profile" src={icon8} alt="" />
              <span className="origin-left duration-200">Setting</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <h2>hh</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
