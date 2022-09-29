import React from "react";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../components/sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <section className="pt-14 px-14 flex-1">
        <div className="border border-gray-400 rounded-lg w-full p-3 flex flex-row items-center">
          <BiSearch className="mr-2" />
          <input
            type="text"
            className="flex-1 outline-none"
            placeholder="Search"
          />
        </div>

        <h3 className="text-lg text-gray-500 my-8 font-bold">Data Barang</h3>
      </section>
    </>
  );
};

export default Dashboard;
