import { auth } from "@/firebase";
import { useAuthStore } from "@/store/useAuthStore";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { Link, useNavigate, type NavigateFunction } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  const handleLogoutClick = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex justify-between h-[50px] border-1 items-center p-5 rounded-sm">
      <p>TaskMaster</p>

      {!user ? (
        <button
          className="p-3 border-1 h-0.5 flex justify-center items-center rounded-sm hover:bg-gray-100 cursor-pointer"
          onClick={() => handleLoginClick(navigate)}
        >
          Login
        </button>
      ) : (
        <div className="flex gap-2 items-center">
          <button
            className="p-3 border-1 h-0.5 flex justify-center items-center rounded-sm hover:bg-gray-100 cursor-pointer"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export const handleLoginClick = async (navigate: NavigateFunction) => {
  const provider = new GoogleAuthProvider().setCustomParameters({
    prompt: "select_account",
  });

  try {
    const result = await signInWithPopup(auth, provider);
    // setUser(result.user);
    const res = await fetch("/server/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: result.user.displayName,
        email: result.user.email,
        profilePicture: result.user.photoURL,
      }),
    });

    const response = await res.json();
    if (response.ok) {
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
export default Navbar;
