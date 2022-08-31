import React from "react";
import metro from "../../Assest/6961783 1.png";
import logo from "../../Assest/logo.png";
import eye from "../../Assest/image-removebg-preview (4) 1.png";
const Login = () => {
  return (
    <div className="flex gap-12 justify-center items-center">
      <div className="div">
        <img className="h-screen w-[100vw] img-fluid" src={metro} alt="" />
      </div>
      <div className="w-[60vw]">
        <img className="flex mx-auto" src={logo} alt="" />

        <form className="pr-12 pl-4 mx-auto mt-24">
          <input
            className="border-b-2 mt-4 w-full"
            type="text"
            name=""
            placeholder="Email Address"
            id=""
          />

          <div class="relative mt-4 flex justify-between items-center">
            <input
              type="password"
              placeholder="Password"
              class=" border-b-2 w-full  z-30"
            />

            <button
              class="border-none hover:bg-white absolute top-1 right-2
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
          <a className="text-green-600" href="#">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
