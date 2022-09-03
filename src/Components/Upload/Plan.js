import React from "react";

const Plan = () => {
  return (
    <div className="px-12 pt-16 pb-12">
      <form>
        <div className="flex justify-between gap-x-14">
          <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
            <option disabled selected>
              Type Of property
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
          <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
            <option disabled selected>
              Type Of Bhk
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>

          <div class="text-lg mt-4 relative flex justify-between items-center w-full">
            <input
              type="Space"
              placeholder="text"
              class="  placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-md z-30"
            />

            <div className="w-full flex flex-row justify-center items-center">
              <select class="w-full text-xs border-b-2 mt-6 text-slate-400  border-slate-300 focus:outline-none focus:border-gray-500 focus:ring-0 ">
                <option disabled selected>
                  Space
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <p className="text-xs border-slate-300 w-full border-b-2 mt-7 flex justify-end">
                sq. ft.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex justify-between gap-x-14">
            <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Per sq.ft price"
            />
            <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Price"
            />
            <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Floor Image 2D/3D"
            />
          </div>
        </div>

        <div class="overflow-x-auto mt-16">
          <table class="table text-sm  w-full border rounded-2xl">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Type Of Bhk</th>
                <th>Space</th>
                <th>Per sq.ft price</th>
                <th>Price</th>
                <th>Floor Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-4 gap-24 mt-16">
          <input
            className="btn btn-outline btn-primary w-full"
            type="submit"
            value="Back"
          />
          <input
            className="col-span-3 btn btn-primary w-full "
            type="submit"
            value="continue"
          />
        </div>
      </form>
    </div>
  );
};

export default Plan;
