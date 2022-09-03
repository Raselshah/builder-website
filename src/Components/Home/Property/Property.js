import React from "react";
import home from "../../../Assest/icons8-home-128 1.png";
import eyeBig from "../../../Assest/download__13_-removebg-preview 3.png";
import eyeSmall from "../../../Assest/download__13_-removebg-preview 6.png";
import pencil from "../../../Assest/icons8-pencil-96 1.png";
import deleted from "../../../Assest/icons8-remove-96 1.png";
import "../../Style/Style.css";
import { useNavigate } from "react-router-dom";

const Property = () => {
  const navigate = useNavigate();
  const tableData = [
    {
      id: "#1001",
      name: "Lodha Codename Premier",
      type: "Residential",
      possession: "Under Construction",
      status: "Approved",
      rate: 3,
    },
    {
      id: "#1002",
      name: "Srishti Launch Code Blockbuster Living",
      type: "Villa ",
      possession: "Ready To  Move",
      status: "Approved",
      rate: 100,
    },
    {
      id: "#1003",
      name: "Lodha Codename Premier",
      type: "Residential",
      possession: "Under  Construction",
      status: "Pending",
      rate: 30,
    },
    {
      id: "#1004",
      name: "Lodha Codename Premier",
      type: "Residential",
      possession: "Under  Construction",
      status: "Approved",
      rate: 0,
    },
    {
      id: "#1004",
      name: "Lodha Codename Premier",
      type: "Commercial",
      possession: "New Launch",
      status: "Pending",
      rate: 50,
    },
  ];
  return (
    <div className="py-16 px-14">
      <div className="flex justify-between items-center rounded-2xl border-2 border-gray-200 px-4 py-2">
        <div className="flex gap-x-2">
          <h2>All(5)</h2>
          <h2>Approved(3)</h2>
          <h2>Pending(2)</h2>
        </div>
        <div className="div">
          <button
            onClick={() => navigate("/userInfo")}
            className="btn h-9 flex flex-row justify-between items-center button border-none"
          >
            <span>Post Property</span>
            <img src={home} alt="" />
          </button>
        </div>
      </div>
      <div class="overflow-x-auto mt-12 border rounded-lg">
        <table class="table w-full">
          <thead>
            <tr className="text-center">
              <th>Id </th>
              <th> Property Name</th>
              <th> Property Type</th>
              <th>Possession Status</th>
              <th>Status </th>
              <th>
                <img src={eyeBig} alt="" />
              </th>
              <th>Action </th>
            </tr>
          </thead>
          {tableData.map((table, index) => (
            <tbody key={index}>
              <tr className="text-sm text-center hover border-b-2">
                <td>{table.id}</td>
                <td>{table.name}</td>
                <td>{table.type}</td>
                <td>{table.possession}</td>
                <td>
                  {" "}
                  <button
                    className={`bg-green-500/80 ${
                      table.status === "Pending" ? "bg-orange-500/70" : ""
                    } p-2 rounded-lg text-white`}
                  >
                    {table.status}
                  </button>{" "}
                </td>
                <td>{table.rate}</td>
                <td>
                  <button>
                    <img src={pencil} alt="" />
                  </button>
                  <button className="px-2">
                    <img src={eyeSmall} alt="" />
                  </button>
                  <button>
                    <img src={deleted} alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Property;
