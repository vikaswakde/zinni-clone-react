import React from "react";
import LargeNav from "../../components/Header/LargeNav/LargeNav";
import { Route, Routes } from "react-router-dom";
import Feed from "./Feed/Feed";

const Home = () => {
  return <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative">
    {/* sidebar section */}
    <div className="lg:w-[16%] md:w-[17%] sm:w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden">
        <LargeNav />
    </div>
    {/* bottom navbar or small scree */}
    {/* feed and profile routing section */}
    <Routes>
        <Route exact path="/" element={<Feed />} />
        {/* profile section */}
    </Routes>
  </div>;
};

export default Home;
