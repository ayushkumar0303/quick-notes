import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between h-[50px] border-1 items-center p-5 rounded-sm">
      <p>TaskMaster</p>
      <button className="p-3 border-1 h-0.5 flex justify-center items-center rounded-sm hover:bg-gray-100 cursor-pointer">
        Login
      </button>
      <div className="flex gap-2 items-center">
        <button className="p-3 border-1 h-0.5 flex justify-center items-center rounded-sm hover:bg-gray-100 cursor-pointer">
          Logout
        </button>
        <button className="p-4 border-1 flex h-1 items-center justify-center rounded-sm bg-blue-400 hover:bg-blue-500 text-white cursor-pointer">
          Dashboard
        </button>
      </div>
    </div>
  );
}

export default Navbar;
