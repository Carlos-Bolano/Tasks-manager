import React from "react";
import { FaTasks } from "react-icons/fa";
import { RiAddFill } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className="w-ful border-b-4 border-gray-300 container mx-auto flex justify-between flex-row items-center py-4 ">
      <div className="flex items-center">
        <img
          src="https://raw.githubusercontent.com/Carlos-Bolano/carlos-bolano-porfolio/master/images/yo1.jpg"
          alt="foto carlos bolaño"
          className="w-12 h-12 rounded-full object-cover ring-1 ring-black "
        />
        <div className="ml-2">
          <h6 className="text-xl mb-0 font-bold ">Carlos Bolaño</h6>
          <p className="text-sm -mt-2 font-medium text-gris">Front-end Developer</p>
        </div>
      </div>
     
      <div className="flex flex-row gap-4">
        <button className=" flex items-center gap-1 py-2 px-8 rounded-lg font-bold bg-white ring-1 ring-black">
          <FaTasks/>
          Tasks
        </button>
        <button className=" flex items-center gap-1 py-2 px-8 rounded-lg font-bold text-white bg-black ring-1 ring-black">
          <RiAddFill/> Add Task  
        </button>
      </div>
    </header>
  );
}
