import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "10",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "11",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "12",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "13",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "14",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "15",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "16",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "17",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "18",
      uv: 5490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "19",
      uv: 2490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "20",
      uv: 7490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "21",
      uv: 5690,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "22",
      uv: 3600,
      pv: 3600,
      amt: 2100,
    },
    {
      name: "23",
      uv: 6590,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "24",
      uv: 390,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="px-24 mt-12">
      <h2 className="text-2xl">Good Morning, Purvankara!</h2>

      <div className="mt-6 border pb-8 pt-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="flex justify-evenly">
          <div className="">
            <h2>Property On Sale</h2>
            <p className="text-green-500">15</p>
          </div>
          <div className="border-r-2 border-gray-100 h-26 w-2"></div>
        </div>
        <div className="flex justify-evenly">
          <div className="">
            <h2>Total Lead Recieve</h2>
            <p className="text-green-500">20</p>
          </div>
          <div className="border-r-2 border-gray-100 h-26 w-2"></div>
        </div>
        <div className="flex justify-evenly">
          <div className="">
            <h2>Total CP Tie-Up </h2>
            <p className="text-green-500">30</p>
          </div>
          <div className="border-r-2 border-gray-100 h-26 w-2"></div>
        </div>
        <div className="flex justify-evenly">
          <div className="">
            <h2>Pending CP Tie-Up</h2>
            <p className="text-green-500">12</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border rounded-lg p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">
            Lead <br /> Statistics
          </h2>
          <select class="select select-bordered w-32">
            <option disabled selected>
              This Month
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="mt-6" style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              {/* <YAxis /> */}
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#2EACAA"
                fill="#2EACAA42"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
