import React from "react";
import { FaCheck } from "react-icons/fa";

function Task() {
  return (
    <section className="max-w-[750px] flex items-center justify-between bg-white rounded-2xl p-6 shadow-2xl">
      <div className="flex items-center gap-x-[50px]">
        <div className="flex items-center justify-center bg-green-600 rounded-full">
         <span className="p-5 text-white"> <img src="/isDone.svg" alt="chulo" className="w-5 h-5" /> </span>
        </div>
        <div className="max-w-lg">
          <h2 className="font-bold text-2xl">Meeting with the group</h2>
          <p className="text-[#202020] max-w-sm font-normal leading-5 mt-2 text-xl">I must meet with Leonardo and Juan to agree on the design</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-8 justify-between">
       <div className="rounded-full bg-blue-600 py-1 px-4 text-white font-normal"><span>Category</span></div>
        <span className="text-sm font-medium text-black">12:30 PM</span>
      </div>
    </section>
  );
}

export default Task;
