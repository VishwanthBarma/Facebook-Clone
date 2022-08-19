import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

function Feed() {
  return (
    <div className="w-screen my-h md:px-20 px-3 overflow-y-scroll space-y-3 scrollbar-hide py-10">
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
