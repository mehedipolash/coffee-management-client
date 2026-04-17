

// export default MainLayout;
import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    // min-h-screen makes the container at least as tall as the window
    // flex-col allows us to stack Header, Content, and Footer vertically
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* flex-grow tells this div to take up all available empty space */}
      <div className="max-w-7xl mx-auto w-full grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;