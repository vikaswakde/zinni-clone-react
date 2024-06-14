import { AppleIcon, BellDotIcon, CompassIcon, ExpandIcon, HeartIcon, HomeIcon, LucideAArrowUp, LucideHome, MessageCircleMoreIcon, MessageSquareIcon, PlusIcon, SearchIcon, SquarePlusIcon, VideoIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
// ** ==  For Sidebar == **
// (** Don't Forgot the import icons **)

const LargeNav = () => {
  const sidebarItems = [
    {
      name: "Search",
      link: "/search",
      icon: <SearchIcon className="bg-black text-white" />,
    },
    {
      name: "Explore",
      link: "/explore",
      icon: <CompassIcon className="bg-black text-white" />,
    },
    {
      name: "Reels",
      link: "/reels",
      icon: <VideoIcon className="bg-black text-white" />,
    },
    {
      name: "Messages",
      link: "/messages",
      icon: <MessageCircleMoreIcon className="bg-black text-white" />,
    },
    {
      name: "Notifications",
      link: "/notifications",
      icon: <HeartIcon className="bg-black text-white" />,
    },
    {
      name: "Create",
      link: "/create",
      icon: <SquarePlusIcon className="bg-black text-white" />,
    },
  ];

  return (
    <div className="w-full h-full relative">
      <Link className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
        <img src={AppleIcon} alt="instagram logo" className="w-28 h-auto" />
      </Link>
      {/* mobile screen insta icon */}
      <div className="w-full h-auto flex items-start flex-col gap-y-2">
        <Link
          to="/"
          className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
        >
          <LucideHome className="bg-black text-white" />

          <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
            Home
          </p>
        </Link>
        {/* loop other navlinks; */}
        {sidebarItems.map((item) => (
          <Link
            key={item.name}
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <span>{item.icon}</span>

            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
              {item.name}
            </p>
          </Link>
        ))}
        {/* profile section */}
      </div>
    </div>
  );
};

export default LargeNav;
