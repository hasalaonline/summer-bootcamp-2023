import { Outlet, Navigate, useLocation } from "react-router-dom";

import "./RootLayout.css";
import Navbar from "../navbar/Navbar";

export const RootLayout = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return <Navigate to="/home" replace={true} />;
  }

  return (
    <div className="container">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
