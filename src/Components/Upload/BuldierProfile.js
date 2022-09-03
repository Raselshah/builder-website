import React from "react";

const BuldierProfile = () => {
  return (
    <div className="px-12 mt-14 pb-12">
      <form>
        <div className="grid grid-cols-4 justify-center items-center gap-32">
          <div className="col-span-3">
            <div className="grid grid-cols-2 gap-12">
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Builder/company Name  "
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Email Id "
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Year of Establishment
              "
              />
              <input
                className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
                type="text"
                placeholder="Projects "
              />
            </div>
          </div>
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-x-14 mt-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Type Of Company "
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Website   "
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Mobile No."
          />
        </div>

        <input
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-12"
          type="text"
          placeholder="Address
          "
        />

        <input
          className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm mt-8"
          type="text"
          placeholder="Descriptions"
        />

        <div className="grid grid-cols-4 gap-24 mt-16">
          <input
            className="btn btn-outline btn-primary w-full"
            type="submit"
            value="Back"
          />
          <input
            className="col-span-3 btn btn-primary w-full"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default BuldierProfile;
