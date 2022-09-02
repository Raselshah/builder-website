import React from "react";
import metro from "../../Assest/6961783 1.png";
import logo from "../../Assest/logo.png";
import eye from "../../Assest/image-removebg-preview (4) 1.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex gap-x-16 justify-start items-center">
      <div className="div">
        <img
          style={{ width: "860px", height: "100vh" }}
          className=""
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

        <form style={{ width: "434px" }} className="mx-auto mt-16 pr-16">
          <input
            className="border-b-2 text-lg pt-6 w-full"
            type="text"
            name=""
            placeholder="Email Address"
            id=""
          />

          <div class="text-lg pt-6 relative flex justify-between items-center">
            <input
              type="password"
              placeholder="Password"
              class=" border-b-2  w-full text-lg z-30"
            />

            <button
              class="border-none absolute right-2 hover:bg-white
           rounded-l-none z-30"
            >
              <img className="w-6 h-4" src={eye} alt="" />
            </button>
          </div>
          <a className="flex justify-end text-xs mt-2" href="">
            Forgot Password
          </a>
          <input
            className="btn mt-12 border-none text-xs hover:bg-green-700/60 mx-auto flex bg-green-700/70 w-full text-white"
            value="Log In"
            type="submit"
          />
        </form>

        <p className="mt-8">
          Don't have an account?
          <Link to="/signup" className="text-green-600" href="#">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
