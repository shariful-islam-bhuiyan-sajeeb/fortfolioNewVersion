import React from "react";
import Header from "../../Share/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Share/Footer";

const Main = () => {
  return (
    <div>
      <div className="max-w-[2000px]">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
