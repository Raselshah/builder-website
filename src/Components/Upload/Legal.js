import React from "react";

const Legal = () => {
  return (
    <div className="mt-12 px-12 pb-12">
      <form>
        <div className="flex justify-between gap-12">
          <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
            <option disabled selected>
              Occupancy Certificate (OC)
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-12 mt-14">
          <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
            <option disabled selected>
              Occupancy Certificate (OC)
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-12 mt-14">
          <div className="flex gap-6 w-full">
            <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                Khata Type
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Khata Number "
            />
          </div>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-12 mt-14">
          <div className="flex gap-6 w-full">
            <select class="border-b-2 w-full text-slate-400  border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 ">
              <option disabled selected>
                RERA Approved
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
            <input
              className=" placeholder:text-slate-400 block w-full border-b-2 border-slate-300 py-2 pr-3 focus:outline-none focus:border-gray-500 focus:ring-0 sm:text-sm"
              type="text"
              placeholder="Approval Authority Name "
            />
          </div>

          <div class=" border p-2 w-full">
            <label class="block">
              <span class="sr-only">Choose file </span>
              <input
                type="file"
                class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-none file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50
      hover:file:bg-violet-100
    "
              />
            </label>
          </div>
        </div>
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
      </form>
    </div>
  );
};

export default Legal;
