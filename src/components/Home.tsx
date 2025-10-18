import { handleLoginClick } from "./Navbar";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "@/store/useAuthStore";

function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-[calc(100vh-64px)]">
      <div className="text-xl font-bold ">TaskMaster</div>
      <div className="text-2xl font-bold">Welcome to TaskMaster</div>
      <p className="font-extralight mt-[-5px]">
        Organise and manage your task efficiently
      </p>
      {!user ? (
        <button
          className="p-4 border-1 h-0.5 flex justify-center items-center rounded-sm  bg-blue-500 hover:bg-blue-600 cursor-pointer text-white"
          onClick={() => handleLoginClick(navigate)}
        >
          Login
        </button>
      ) : (
        <Link to="/dashboard">
          <button className="p-4 border-1 h-0.5 flex justify-center items-center rounded-sm  bg-blue-500 hover:bg-blue-600 cursor-pointer text-white">
            Dashboard
          </button>
        </Link>
      )}
    </div>
  );
}

export default Home;
