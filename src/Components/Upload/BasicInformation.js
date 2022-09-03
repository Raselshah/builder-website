import React from "react";

const BasicInformation = () => {
  return (
    <div className="px-12 pt-16 pb-12">
      <form>
        <div className="flex justify-between gap-x-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project or property name  "
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project Address "
          />
        </div>
        <div className="flex justify-between gap-x-14 mt-14">
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project Locality  "
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project City/District   "
          />
          <input
            className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
            type="text"
            placeholder="Project State"
          />
        </div>

        <div className="mt-12">
          <h2 className="font-bold">Property Type</h2>
          <div className="mt-8 flex justify-start gap-x-12">
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Residential"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Commercial"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Mixed development"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Mixed Other"
            />
          </div>
        </div>
        <div className="mt-12">
          <h2 className="font-bold">PProperty Sub - Type</h2>
          <div className="mt-8 flex gap-6  justify-start gap-x-12">
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Apartment "
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Residential Plot"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Independent House"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Studio Apartment"
            />
          </div>
          <div className="flex justify-start gap-12 mt-8">
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Independent Floor"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Duplex"
            />
            <input
              className="btn btn-outline btn-primary text-white"
              type="button"
              value="Penthouse"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Agricultural Land"
            />
            <input
              className="btn btn-outline btn-primary"
              type="button"
              value="Villa"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2>Property Pricing </h2>
          <div className="flex justify-between gap-x-14 mt-8">
            <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Project or property name  "
            />
            <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Project Address "
            />
          </div>
        </div>
        <div className="mt-12">
          <h2>Property Space </h2>
          <div className="flex justify-between gap-x-14 mt-12">
            <div class="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="Min Space"
                class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              />

              <p class="absolute right-2 text-slate-400 z-30">sq. ft.</p>
            </div>
            <div class="text-lg mt-4 relative flex justify-between items-center w-full">
              <input
                type="text"
                placeholder="Max Space"
                class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
              />

              <p class="absolute right-2 text-slate-400 z-30">sq. ft.</p>
            </div>

            <select class="border-b-2 text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                Pick your favorite Simpson
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="">Property Overview</h2>

          <div className="mt-8 flex justify-between gap-x-14">
            <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                Configuration
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <input
              type="text"
              placeholder="Max Space"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
            />
            <input
              type="text"
              placeholder="Max Space"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
            />
          </div>

          <div className="mt-8 flex justify-between gap-x-14">
            <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                Possission Status
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                Facing
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                Furnishing
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="mt-8 flex justify-between gap-x-14">
            <input
              type="text"
              placeholder="RERA Number"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
            />
            <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                Tag
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <input
              type="text"
              placeholder="Possession Starts"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm z-30"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2>About Project</h2>
        </div>

        <input
          className="btn mt-16 flex justify-center w-full mx-auto btn-primary text-white"
          type="submit"
          value="Continue "
        />
      </form>
    </div>
  );
};

export default BasicInformation;
