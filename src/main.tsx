import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
