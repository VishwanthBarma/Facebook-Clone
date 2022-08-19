import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import { AiOutlineVideoCamera } from "react-icons/ai";
import {
  MdOutlinePhotoSizeSelectActual,
  MdOutlineEmojiEmotions,
  MdCancel,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { addPost } from "../public/src/features/postSlice";

function CreatePost() {
  const FB_ENDPOINT = "";

  const { data: session } = useSession();

  const inputRef = useRef(null);
  const hiddenFileInput = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImageToPost(e.target.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    const formData = new FormData();

    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("image", session?.user.image);

    axios
      .post(FB_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        inputRef.current.value = "";
        dispatch(addPost(res.data));
        setImageToPost(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-neutral-800 mb-10 rounded-xl flex flex-col p-4 space-y-4">
      <form className="flex items-center space-x-3">
        <img
          className="h-14 w-14 ml-3 rounded-full border-2"
          src="https://avatars.githubusercontent.com/u/72876374?v=4"
        ></img>
        <input
          ref={inputRef}
          className="bg-black outline-none p-3 flex-1 rounded-xl"
          placeholder="What's on your mind ?"
        ></input>
        <button hidden onClick={handleSubmit}></button>
      </form>

      {imageToPost && (
        <div className="m-3 p-2 relative">
          <button
            onClick={() => setImageToPost(null)}
            className="absolute top-0 left-0"
          >
            <MdCancel className="h-7 w-7 text-rose-500 border-2 bg-neutral-800 border-neutral-800 shadow-sm rounded-full" />
          </button>
          <img
            className="h-14 w-14 rounded-full object-cover shadow-md shadow-black"
            src={imageToPost}
          ></img>
        </div>
      )}

      <div className="flex items-center justify-around">
        <button className="flex items-center active:opacity-50">
          <AiOutlineVideoCamera className="h-5 w-5 text-rose-500 mr-1" />
          Live Video
        </button>
        <button
          onClick={handleClick}
          className="flex items-center active:opacity-50"
        >
          <MdOutlinePhotoSizeSelectActual className="h-5 w-5 text-green-500 mr-1" />
          Photo/Video
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={addImageToPost}
            hidden
            accept="image/*"
          ></input>
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
