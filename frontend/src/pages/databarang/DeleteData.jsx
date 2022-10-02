import React from "react";

const DeleteData = () => {
  return (
    <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-black bg-opacity-50">
      <div className="max-h-[250px] min-w-[200px] mt-4 border border-gray-400 rounded-lg p-8 flex flex-col items-center shadow-lg bg-white">
        <div className="w-full h-full flex flex-col justify-end gap-16">
          <h1 className="text-lg font-bold">
            Anda Yakin Ingin Menghapus Data Ini ?
          </h1>

          <div className="flex flex-row gap-4 w-full justify-end text-white">
            <button className="text-center bg-indigo-600 hover:bg-indigo-800 rounded text-sm w-[90px] h-11">
              CANCEL
            </button>
            <button className="text-center bg-red-600 hover:bg-red-800 rounded text-sm w-[90px] h-11">
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteData;
