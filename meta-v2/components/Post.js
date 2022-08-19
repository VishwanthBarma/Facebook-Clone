import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";

function Post() {
  return (
    <div className="flex flex-col bg-neutral-800 rounded-xl">
      <div className="flex space-x-3 items-center p-3">
        <img
          className="h-10 w-10 ml-3 rounded-full border-2"
          src="https://avatars.githubusercontent.com/u/72876374?v=4"
        ></img>
        <div>
          <h1 className="font-semibold">Barma Vishwanth</h1>
          <p className="text-xs text-slate-300">Sat Mar 19 12</p>
        </div>
      </div>
      <h1 className="p-3 mx-10">Hello World!.....</h1>
      <div className="h-46 w-full mb-5">
        <img
          className="object-cover h-46 w-full"
          src=" https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg"
        ></img>
      </div>
      <div className="flex items-center justify-around mb-5">
        <button className="flex items-center">
          <AiOutlineHeart className="h-6 w-6 mr-2 text-rose-500" />
          Like
        </button>
        <button className="flex items-center">
          <BiCommentDetail className="h-5 w-5 mr-2 text-green-500" />
          Comment
        </button>
        <button className="flex items-center">
          <BsBookmarkHeart className="h-5 w-5 mr-2 text-sky-500" />
          Save
        </button>
      </div>
    </div>
  );
}

export default Post;
