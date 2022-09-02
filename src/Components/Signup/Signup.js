import React from "react";
import metro from "../../Assest/6961783 1.png";
import logo from "../../Assest/logo.png";
import eye from "../../Assest/image-removebg-preview (4) 1.png";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex gap-12 justify-center items-center">
      <div className="div">
        <img
          style={{ width: "860px", height: "100vh" }}
          className="img-fluid"
          src={metro}
          alt=""
        />
      </div>
      <div className="">
        <img
          style={{ width: "270px", height: "107px" }}
          className="flex mx-auto"
          src={logo}
          alt=""
        />

        <form style={{ width: "434px" }} className="pr-16 mx-auto mt-12">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            name=""
            placeholder="Name"
            id=""
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-4"
            type="text"
            name=""
            placeholder="Email Address"
            id=""
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-4"
            type="text"
            name=""
            placeholder="Mobile No."
            id=""
          />

          <div class="text-lg mt-4 relative flex justify-between items-center">
            <input
              type="password"
              placeholder="Password"
              class=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
            />

            <button
              class="border-none absolute right-2 hover:bg-white
           rounded-l-none z-30"
            >
              <img className="w-6 h-4" src={eye} alt="" />
            </button>
          </div>

          <input
            className="btn mt-8 border-none text-xs hover:bg-green-700/60 mx-auto flex bg-green-700/70 w-full text-white"
            value="Create Account"
            type="submit"
          />
        </form>

        <p className="mt-8">
          Already have an account?{" "}
          <Link to="/" className="text-green-600" href="#">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
