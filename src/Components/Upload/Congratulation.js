import React from "react";
import { useNavigate } from "react-router-dom";
import frame from "../../Assest/Frame 29.png";

const Congratulation = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <p
        onClick={() => navigate("/dashboard")}
        className="flex justify-end p-6"
      >
        X
      </p>
      <div className="flex flex-col justify-center items-center">
        <img src={frame} alt="" />
        <p className="font-bold text-center">
          {" "}
          Thanks for submitting you listing. <br /> We will review it and get
          back to you on this.{" "}
        </p>
      </div>
    </div>
  );
};

export default Congratulation;
