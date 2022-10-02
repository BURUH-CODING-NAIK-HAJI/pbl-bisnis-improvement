import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../../components/sidebar";
import axios from "axios";
import CreateData from "./CreateData";

const DataBarang = () => {
  const [createData, setCreateData] = useState(false);
  const [barang, setBarang] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    document.title = "Data Barang";
  });

  useEffect(() => {
    getBarang();
  }, []);

  async function getBarang() {
    const response = await axios.get("http://localhost:5000/product");
    const data = response.data;
    setBarang(data);
  }

  // create data
  function handleCreateData() {
    setCreateData(true);
    console.info(createData);
    return;
  }
  function handleCancelData() {
    setCreateData(false);
    return;
  }

  // delete barang
  const deleteBarang = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      getBarang();
    } catch (error) {
      console.info(error);
    }
  };

  const tabelHead = ["No", "Nama Barang", "Jenis", "Jumlah", "Action"];

  return (
    <>
      <Sidebar />
      <section className="pt-14 px-14 flex flex-col w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Data Barang</h1>
          <div className="flex flex-row items-center justify-between">
            <div className="border border-gray-400 rounded-lg w-[25%] p-3 flex flex-row items-center">
              <BiSearch className="mr-2" />
              <input
                type="text"
                className="flex-1 outline-none w-full"
                placeholder="Search"
                onChange={(event) => {
                  setSearchData(event.target.value);
                  console.info(searchData);
                }}
              />
            </div>
            <button
              className="w-44 h-10 bg-[#16DC16] hover:bg-[#0a980a] rounded-md text-white "
              onClick={handleCreateData}
            >
              + Tambah Data
            </button>
            {createData ? <CreateData handleCancel={handleCancelData} /> : null}
          </div>

          {/* Tabel */}
          <div>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tabelHead.map((item, index) => {
                    return (
                      <th
                        scope="col"
                        className="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        key={index}
                      >
                        {item}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {barang
                  .filter((val) => {
                    if (searchData === "") {
                      return val;
                    } else if (
                      val.nama_barang
                        .toLowerCase()
                        .includes(searchData.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.nama_barang}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.jenis}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {item.jumlah}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-row gap-4 justify-center text-white">
                            <Link
                              to={`/editdata/${item.id}`}
                              className="text-center flex justify-center items-center bg-indigo-600 hover:bg-indigo-800 rounded text-sm w-16 h-9"
                            >
                              EDIT
                            </Link>
                            <button
                              onClick={() => {
                                deleteBarang(item.id);
                              }}
                              className="text-center bg-red-600 hover:bg-red-800 rounded text-sm w-16 h-9"
                            >
                              DELETE
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataBarang;
