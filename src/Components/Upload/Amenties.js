import React from "react";

const Amenties = () => {
  return (
    <div className="px-12 mt-16 pb-12">
      <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
        <option disabled selected>
          Basic Amenties
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <select class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
        <option disabled selected>
          Convenience Amenties
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <select class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
        <option disabled selected>
          Security Amenties
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <select class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
        <option disabled selected>
          Environment Amenties
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>
      <select class="border-b-2 mt-8 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
        <option disabled selected>
          Sports Amenties
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>

      <div className="grid grid-cols-4 gap-24 mt-16">
        <input
          className="btn btn-outline btn-primary w-full"
          type="submit"
          value="Back"
        />
        <input
          className="col-span-3 btn btn-primary w-full"
          type="submit"
          value="continue"
        />
      </div>
    </div>
  );
};

export default Amenties;
