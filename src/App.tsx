import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Outlet } from "react-router";

function App() {
  const { setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, [setUser]);

  return (
    <div className="w-100vw h-[calc(100vh-16px)] m-2">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
