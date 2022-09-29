import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateData = (props) => {
  const [nama_barang, setNamaBarang] = useState("");
  const [jenis, setJenis] = useState("");
  const [jumlah, setJumlah] = useState();
  const navigate = useNavigate();

  function handleName(e) {
    setNamaBarang(e.target.value);
  }
  function handleJenis(e) {
    setJenis(e.target.value);
  }
  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  const saveBarang = async (e) => {
    try {
      await axios.post("http://localhost:5000/product", {
        nama_barang,
        jenis,
        jumlah,
      });
      navigate("/databarang");
    } catch (error) {
      console.info(error);
    }
  };
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-50">
      <form
        onSubmit={saveBarang}
        className="w-[40%] border border-gray-400 rounded-lg p-10 flex flex-col items-center shadow-lg bg-white"
      >
        <div className="w-full">
          <h2 className="text-md text-black font-bold">Request Barang</h2>
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
            onClick={props.handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateData;
