import React from "react";
import sub from "../../Assest/Subtract1.png";

const Profile = () => {
  return (
    <div
      style={{
        width: "980px",
        height: "880px",
        margin: "auto",
        border: "2px solid #E5E5E5",
        borderRadius: "12px",
      }}
      className="my-16"
    >
      <div className="grid grid-cols-2 justify-between items-center">
        <div className=""></div>
        <div className="flex justify-center items-center">
          <h2 className="text-3xl mt-8">profile</h2>
          <div className="mr-8 mt-8 flex flex-col justify-end items-center mx-auto">
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <button>
              <img className="w-5 h-5 mt-2" src={sub} alt="" />
            </button>
          </div>
        </div>
      </div>

      <form className="mt-24 px-16">
        <div className="flex justify-between gap-x-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Company Name "
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Email Id"
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Mobile No."
          />
        </div>

        <input
          className=" placeholder:text-slate-400 block w-full mt-8 border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
          type="text"
          placeholder="Address
            "
        />

        <div className="flex justify-between mt-8 gap-x-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Year of Establishment
            "
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Projects"
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Website"
          />
        </div>

        <input
          className=" placeholder:text-slate-400 block w-64 border-b-2 border-slate-300 py-2 pr-3 mt-8 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
          type="text"
          placeholder="Type Of Company 
            "
        />

        <input
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 mt-8 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
          type="text"
          placeholder="Descriptions
            "
        />

        <input
          className="mt-32 flex mx-auto btn btn-primary w-full"
          type="submit"
          value="Update "
        />
      </form>
    </div>
  );
};

export default Profile;
