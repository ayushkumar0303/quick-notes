import { useAuthStore } from "@/store/useAuthStore";

import Dashboard from "./Dashboard";
import { Navigate } from "react-router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export default function PrivateRoute() {
  const { user, setUser } = useAuthStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
    });

    // Cleanup listener when component unmounts
    return () => unsubscribe();
  }, []);

  return user ? <Dashboard /> : <Navigate to="/" />;
}
