import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full bg-slate-100 bg-gambar-login bg-no-repeat bg-[length:900px_900px]">
      <form
        className="bg-white p-8 rounded-md w-[500px] flex flex-col gap-8 shadow-2xl"
        autoComplete="off"
      >
        <h1 className="text-2xl text-indigo-600 text-center font-extrabold">
          LOGIN FORM
        </h1>
        <div className="flex flex-col gap-2">
          <label for="username" className="text-lg font-light">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-gray-300 h-10 px-3 font-light"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label for="password" className="text-lg font-light">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-300 h-10 px-3 font-light"
          />
        </div>
        <button
          type="submit"
          class="border-[1px] p-2 text-white rounded-lg bg-indigo-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
