import React from "react";

const EditData = (props) => {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-50">
      <form className="w-[60%] border border-gray-400 rounded-lg p-10 flex flex-col items-center shadow-lg bg-white">
        <div className="w-full">
          <h2 className="text-md text-black font-bold">Edit Data Barang</h2>
        </div>
        <div className="form_group w-full my-4">
          <label for="username" className="mr-12">
            Data Masuk
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
          />
        </div>
        <div className="form_group w-full">
          <label for="username" className="mr-12">
            Data Masuk
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
          />
        </div>
        <div className="form_group w-full my-4">
          <label for="username" className="mr-12">
            Data Masuk
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
          />
        </div>
        <div className="form_group w-full">
          <label for="username" className="mr-12">
            Data Masuk
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
          />
        </div>
        <div className="form_group w-full my-4">
          <label for="username" className="mr-12">
            Data Masuk
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
          />
        </div>
        <div className="form_group w-full">
          <label for="username" className="mr-12">
            Data Masuk
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="border border-gray-400 rounded-lg w-full h-9 p-3 flex flex-row items-center"
          />
        </div>
        <div className="flex flex-row gap-4 w-full justify-end mt-5">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={props.handleCancel}
          >
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditData;
