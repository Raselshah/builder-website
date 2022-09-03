import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CustomLinkP from "../Hook/CustomLinkP";
import cancel from "../../Assest/icons8-cancel-64 2.png";

const BasicInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <div className="">
        <button
          className="m-6 flex ml-auto"
          onClick={() => navigate("/dashboard")}
        >
          <img title="Cancel" className="" src={cancel} alt="" />
        </button>
        <h2 className="mt-10 text-center text-2xl font-bold">Upload Listing</h2>
      </div>
      <div className="div">
        <navbar className="">
          <ul className="flex justify-between px-12 pt-12 text-secondary ">
            <li className="">
              <CustomLinkP to="/userInfo">Basic Info</CustomLinkP>
            </li>
            <li>
              <CustomLinkP to="plan">Floor Plan </CustomLinkP>
            </li>
            <li>
              <CustomLinkP to="amenties">Amenties </CustomLinkP>
            </li>
            <li>
              <CustomLinkP to="legal">Legal Details </CustomLinkP>
            </li>
            <li>
              <CustomLinkP to="project">Project Images</CustomLinkP>
            </li>
            <li>
              <CustomLinkP to="builder">Builder Profile</CustomLinkP>
            </li>
          </ul>
        </navbar>
        <hr className="" />
      </div>
      <Outlet />
    </div>
  );
};

export default BasicInfo;
