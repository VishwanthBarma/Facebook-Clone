import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

function Feed() {
  return (
    <div className="w-screen h-screen px-20 overflow-y-scroll space-y-3 scrollbar-hide my-10 ">
      <CreatePost />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
