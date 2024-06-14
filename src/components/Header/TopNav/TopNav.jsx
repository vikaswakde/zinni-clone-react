import { LucideOctagon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import SearchLogo from "../../../assets/navlogo/search.png";
import InstagramLogo from "../../../assets/navlogo/instagram.png";
import MessageLogo from "../../../assets/navlogo/message.png";

const TopNav = () => {
  return (
    <div className="w-full h-auto mb-5 lg:hidden md:hidden sm:block block">
      <div className="w-full h-auto flex items-center justify-between">
        <Link to="/">
          <img
            src={InstagramLogo}
            alt="Insta logo"
            className="w-28 h-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-x-4 pe-2">
          <Link to="/">
            <img src={SearchLogo} alt=" logo" className="w-6 h-6" />
          </Link>{" "}
          <Link to="/">
            <img src={MessageLogo} alt=" logo" className="relative w-6 h-6" />
            <div className="absolute -right-2 -top-2 bg-red-600 text-sm text-white rounded-full w-5 h-5 flex items-center justify-center">
              6
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
