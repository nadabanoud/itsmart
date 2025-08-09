import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

function ClientLayout() {
  return (
    <>
      <Navbar />
      <main className="w-full px-8 md:px-10 lg:px-12 bg-background">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default ClientLayout;
