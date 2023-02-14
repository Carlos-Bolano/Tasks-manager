import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Siderbar";
import Navbar from "../components/Navbar";
import TasksList from "../components/TasksList";

const LayoutAdmin = () => {
  return (
    <>
      <Navbar />
    <div className="container mx-auto mt-8 flex justify-between flex-wrap gap-10">
     <div className="w-[750px]">
     <TasksList />
     </div>
     <div className="">
     <Sidebar/>
     </div>
    </div>
    </>
  );
};

export default LayoutAdmin;
