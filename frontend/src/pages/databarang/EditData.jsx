import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EditData = (props) => {
  const [nama_barang, setNamaBarang] = useState("");
  const [jenis, setJenis] = useState("");
  const [jumlah, setJumlah] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getBarangById();
    // eslint-disable-next-line
  }, []);

  function handleName(e) {
    setNamaBarang(e.target.value);
  }
  function handleJenis(e) {
    setJenis(e.target.value);
  }
  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/product/${id}`, {
        nama_barang,
        jenis,
        jumlah,
      });
      navigate("/databarang");
    } catch (error) {
      console.info(error);
    }
  };
  async function getBarangById() {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    const data = response.data;
    console.info(data);
    setNamaBarang(data.nama_barang);
    setJenis(data.jenis);
    setJumlah(data.jumlah);
  }

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-slate-100">
      <form
        onSubmit={updateBarang}
        className="w-[40%] border border-gray-400 rounded-lg p-10 flex flex-col items-center shadow-2xl bg-white "
      >
        <div className="w-full">
          <h2 className="text-md text-black font-bold">Edit Barang</h2>
        </div>
        <div className="form_group w-full my-4">
          <label for="username" className="mr-12">
            Nama Barang
          </label>
          <input
            type="text"
            name="username"
            value={nama_barang}
            onChange={handleName}
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
            required
          />
        </div>
        <div className="form_group w-full">
          <label for="username" className="mr-12">
            Jenis
          </label>
          <input
            type="text"
            name="username"
            value={jenis}
            onChange={handleJenis}
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
            required
          />
        </div>
        <div className="form_group w-full my-4">
          <label for="username" className="mr-12">
            Jumlah
          </label>
          <input
            type="text"
            name="username"
            value={jumlah}
            onChange={handleJumlah}
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
            required
          />
        </div>
        <div className="flex flex-row gap-4 w-full justify-end mt-5">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              navigate("/databarang");
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditData;
