import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import { BsFillStopwatchFill } from "react-icons/bs";

function SideBar() {
  return (
    <div className="flex flex-col md:w-44 w-20 space-y-2 pl-5 pt-5 left-0">
      <div className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-800 p-3 rounded-xl">
        <AiFillHome className="h-7 w-7" />
        <h1 className="font-semibold hidden md:inline">Home</h1>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-800 p-3 rounded-xl">
        <FaUserFriends className="h-7 w-7" />
        <h1 className="font-semibold hidden md:inline">Friends</h1>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-800 p-3 rounded-xl">
        <MdMovieCreation className="h-7 w-7" />
        <h1 className="font-semibold hidden md:inline">Watch</h1>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer hover:bg-neutral-800 p-3 rounded-xl">
        <BsFillStopwatchFill className="h-7 w-7" />
        <h1 className="font-semibold hidden md:inline">Memories</h1>
      </div>
    </div>
  );
}

export default SideBar;
