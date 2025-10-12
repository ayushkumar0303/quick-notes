import { onAuthStateChanged } from "firebase/auth";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

function App() {
  const { setUser } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        console.log(usr);

        setUser(usr);
      } else {
        setUser(null);
      }
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, [setUser]);

  return (
    <div className="w-100vw h-[calc(100vh-16px)] m-2">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
