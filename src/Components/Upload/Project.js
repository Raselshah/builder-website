import React from "react";

const Project = () => {
  return (
    <div className="mt-12 px-12 pb-12">
      <h2 className="font-bold">Property Image/Video</h2>
      <form className="mt-8">
        <div className="flex flex-row justify-between gap-36">
          <div className="w-full">
            <h2 className="text-gray-400">Property External Images</h2>
            <div class=" border p-2 w-full">
              <label class="block">
                <span class="sr-only">Select Image </span>
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
          <div className="w-full">
            <h2 className="text-gray-400">Property Internal Image</h2>
            <div class=" border p-2 w-full">
              <label class="block">
                <span class="sr-only">Select Image </span>
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
        </div>

        <div className="flex flex-row justify-between mt-16 gap-36">
          <div className="w-full">
            <h2 className="text-gray-400">Property Amenties</h2>
            <div class=" border p-2 w-full">
              <label class="block">
                <span class="sr-only">Select Image </span>
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
          <div className="w-full">
            <h2 className="text-gray-400">Other Images</h2>
            <div class=" border p-2 w-full">
              <label class="block">
                <span class="sr-only">Select Image </span>
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
        </div>

        <div class="mt-36 w-full">
          <table class="border-collapse border w-full border-slate-400">
            <thead className="border-b-2">
              <tr>
                <th className="border border-slate-300 w-72 p-2">Image Type</th>
                <th className="border border-slate-300">Image </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="">
                <td className="border border-slate-300 p-6">External Images</td>
                <td className="border border-slate-300 p-6">
                  {" "}
                  Internal Images
                </td>
              </tr>

              <tr>
                <td className="border border-slate-300 p-6">Internal Images</td>
                <td className="border border-slate-300 p-6">Hart Hagerty</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-6">Amenties Images</td>
                <td className="border border-slate-300 p-6">Hart Hagerty</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-6">Other Images</td>
                <td className="border border-slate-300 p-6"> Hart Hagerty</td>
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
            className="col-span-3 btn btn-primary w-full"
            type="submit"
            value="continue"
          />
        </div>
      </form>
    </div>
  );
};

export default Project;
