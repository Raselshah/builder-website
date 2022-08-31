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
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div className="sticky top-0 w-56 bg-base-100 h-[120vh] pt-16  duration-300 border-r-2 border-gray-100 shadow-lg">
        <ul className="">
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600 items-center gap-x-4"
            >
              <img title="Dashboard" src={icon1} alt="" />
              <span
                onClick={() => setOpen(true)}
                className="origin-lef text-lg"
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/property"
              className="flex rounded-md px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600  items-center gap-x-4"
            >
              <img title="Property" src={icon2} alt="" />
              <span className="origin-left text-lg">Property</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600 items-center gap-x-4"
            >
              <img title="Lead" src={icon3} alt="" />
              <span className="origin-left text-lg">Lead</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="chat"
              className="flex rounded-md px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600  items-center gap-x-4"
            >
              <img title="Chat" src={icon4} alt="" />
              <span className="origin-left text-lg">Chat</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600 items-center gap-x-4"
            >
              <img title="Sales Partner" src={icon5} alt="" />
              <span className="origin-left text-lg">Sales Partner</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600 items-center gap-x-4"
            >
              <img title="Calendar" src={icon6} alt="" />
              <span className="origin-left text-lg">Calendar</span>
            </Link>
          </li>

          <div className="border-dot mt-12"></div>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md mt-12 px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600  items-center gap-x-4"
            >
              <img title="Profile" src={icon7} alt="" />
              <span className="origin-left text-lg">Profile</span>
            </Link>
          </li>
          <li className="hover:bg-gray-200">
            <Link
              to="/"
              className="flex rounded-md px-6 py-4 cursor-pointer hover:bg-light-white text-gray-600 items-center gap-x-4"
            >
              <img title="Profile" src={icon8} alt="" />
              <span className="origin-left text-lg">Setting</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
