import React from "react";
import icon from "../../Assest/icons8-ellipsis-100 (1) 1.png";

const Chat = () => {
  return (
    <div className="grid grid-cols-3 py-24 px-14">
      <div className="border rounded-l-lg px-8 pb-16">
        <h2 className="py-12 ">Chats</h2>

        <div className="div">
          <input
            placeholder="Search..."
            type="text"
            className="border-b-2 border-gray-300 w-full"
            name=""
            id=""
          />

          <div className="mt-16">
            <div className="flex justify-between items-center gap-x-2">
              <div className="flex justify-center items-center">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
              <p className="rounded-full w-2 h-2 text-white text-xl mx-auto bg-blue-400 p-4 flex justify-center items-center">
                1
              </p>
            </div>
            <hr />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex justify-between items-center gap-x-2 mt-4">
              <div className="flex justify-center items-center">
                <div class="avatar">
                  <div class="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt="" />
                  </div>
                </div>
                <div className="pl-4">
                  <h3 className="text-sm">Elegance Homes</h3>
                  <p className="text-xs">
                    Sure, we will let you know about this{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 border rounded-r-lg">
        <div className="flex justify-between items-center pt-8 px-8 py-4">
          <div className="flex justify-center items-center">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
            <div className="pl-4">
              <h3 className="text-sm">Elegance Homes</h3>
            </div>
          </div>
          <p className="rounded-full">
            <img src={icon} alt="" />
          </p>
        </div>
        <hr />

        <div className="div">
          <div className="div">
            <p>Today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
