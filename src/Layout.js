// Layout.js

import React from "react";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="mt-8 flex-1 mr-6">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
