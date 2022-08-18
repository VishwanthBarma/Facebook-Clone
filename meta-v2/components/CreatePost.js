import React from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import {
  MdOutlinePhotoSizeSelectActual,
  MdOutlineEmojiEmotions,
} from "react-icons/md";

function CreatePost() {
  return (
    <div className="bg-neutral-800 mb-10 rounded-xl flex flex-col p-4 space-y-4">
      <div className="flex items-center space-x-3">
        <img
          className="h-14 w-14 ml-3 rounded-full border-2"
          src="https://avatars.githubusercontent.com/u/72876374?v=4"
        ></img>
        <input
          className="bg-black outline-none p-3 flex-1 rounded-xl"
          placeholder="What's on your mind ?"
        ></input>
      </div>
      <div className="flex items-center justify-around">
        <button className="flex items-center active:opacity-50">
          <AiOutlineVideoCamera className="h-5 w-5 text-rose-500 mr-1" />
          Live Video
        </button>
        <button className="flex items-center active:opacity-50">
          <MdOutlinePhotoSizeSelectActual className="h-5 w-5 text-green-500 mr-1" />
          Photo/Video
        </button>
        <button className="flex items-center active:opacity-50">
          <MdOutlineEmojiEmotions className="h-5 w-5 text-yellow-500 mr-1" />
          Feeling/Activity
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
