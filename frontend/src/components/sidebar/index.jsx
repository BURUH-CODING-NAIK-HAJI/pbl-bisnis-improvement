import React from "react";
// import Logo from "./logo.png";
import { BiHomeAlt } from "react-icons/bi";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineSetting,
} from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { BsJournalText } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { GrReactjs } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <BiHomeAlt />, link: "/" },
    { name: "Data Barang", icon: <AiOutlineArrowDown />, link: "/databarang" },
  ];
  const menuPermintaan = [
    {
      name: "Permintaan Barang",
      icon: <AiOutlineArrowUp />,
      link: "/permintaanbarang",
    },
    {
      name: "Status Permintaan",
      icon: <BsJournalText />,
      link: "/statuspermintaan",
    },
  ];
  const menuLaporan = [
    { name: "Data Laporan", icon: <GiMoneyStack />, link: "/datalaporan" },
  ];
  const menuPersonal = [
    {
      name: "Setting",
      icon: <AiOutlineSetting />,
      link: "/setting",
    },
    {
      name: "Logout",
      icon: <FiLogOut />,
      link: "/logout",
    },
  ];
  return (
    <div className="max-h-min border-r bg-indigo-600 w-64 space-y-10 text-white">
      <div className="flex flex-row items-center justify-center mt-12">
        <span className="mr-1">
          <GrReactjs size={25} />
        </span>
        <div>
          <h1>Gudang Ecek2</h1>
        </div>
      </div>
      <div className="w-64">
        <ul>
          {menu.map((item, index) => {
            return (
              <li key={index} className=" flex flex-row items-center h-16">
                <div className="w-100% h-full flex flex-row ">
                  <Link
                    className="flex flex-row w-64 items-center hover:bg-slate-100 hover:text-black"
                    to={item.link}
                  >
                    <div className="mr-3 ml-8">{item.icon}</div>
                    {item.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="w-full">
          <h3 className="ml-6 font-bold">Permintaan</h3>
        </div>
        <ul>
          {menuPermintaan.map((item, index) => {
            return (
              <li key={index} className=" flex flex-row items-center h-16">
                <div className="w-100% h-full flex flex-row ">
                  <Link
                    className="flex flex-row w-64 items-center hover:bg-slate-100 hover:text-black"
                    to={item.link}
                  >
                    <div className="mr-3 ml-8">{item.icon}</div>
                    {item.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="w-full">
          <h3 className="ml-6 font-semibold">Status Administrasi</h3>
        </div>
        {menuLaporan.map((item, index) => {
          return (
            <li key={index} className=" flex flex-row items-center h-16">
              <div className="w-100% h-full flex flex-row ">
                <Link
                  className="flex flex-row w-64 items-center hover:bg-slate-100 hover:text-black"
                  to={item.link}
                >
                  <div className="mr-3 ml-8">{item.icon}</div>
                  {item.name}
                </Link>
              </div>
            </li>
          );
        })}
        <div className="w-full">
          <h3 className="ml-6 font-semibold">Personal</h3>
        </div>
        {menuPersonal.map((item, index) => {
          return (
            <li key={index} className=" flex flex-row items-center h-16">
              <div className="w-100% h-full flex flex-row ">
                <Link
                  className="flex flex-row w-64 items-center hover:bg-slate-100 hover:text-black"
                  to={item.link}
                >
                  <div className="mr-3 ml-8">{item.icon}</div>
                  {item.name}
                </Link>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
