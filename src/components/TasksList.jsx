import React from "react";
import Task from "./Task";

function TasksList() {
  return (
    <header className="w-[750px]">
      <section className="flex justify-between ">
        <div className="">
          <h1 className="font-bold text-5xl leading-[58px]">My Tasks</h1>
          <p className="font-semibold text-3xl leading-9 text-gris">
           February 14, 2023 
          </p>
        </div>
        <div className="flex flex-col justify-end">
          <button className=" py-3 px-12 rounded-lg font-bold text-white bg-black  ring-1 ring-black">
            Filter
          </button>
        </div>
      </section>
      <section className="mt-9 flex flex-col gap-6">
        <Task />
        <Task />
        <Task />
      </section>
    </header>
  );
}

export default TasksList;
