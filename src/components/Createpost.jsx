import { useContext, useRef } from "react";
import { PostList } from "../store/PostListProvider";

const Createpost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const PosttitleElement = useRef();
  const PostbodyElement = useRef();
  const PostReactionElement = useRef();
  const tagsElement = useRef();

  const HandleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const Posttitle = PosttitleElement.current.value;
    const Postbody = PostbodyElement.current.value;
    const PostReaction = PostReactionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, Posttitle, Postbody, PostReaction, tags);

    userIdElement.current.value = "";
    PosttitleElement.current.value = "";
    PostbodyElement.current.value = "";
    PostReactionElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <>
      <div className="w-2/5 mx-10 ml-80 m-12   p-12 rounded-md text-black bg-white justify-center">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">App</span>
        </div>

        <form className="flex flex-col gap-3 " onSubmit={HandleSubmit}>
          <div className="block relative">
            <label
              htmlFor="userId"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Enter your user id here
            </label>
            <input
              type="text"
              id="userId"
              ref={userIdElement}
              className="rounded border border-gray-800 text-sm w-full font-normal leading-[18px] text-black   tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              placeholder=" Your user id"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="title"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Post title
            </label>
            <input
              type="text"
              id="title"
              ref={PosttitleElement}
              className="rounded border border-gray-800 text-sm w-full font-normal leading-[18px] text-black   tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              placeholder="How are You feeling today"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="body"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Post content
            </label>
            <input
              type="text"
              id="body"
              ref={PostbodyElement}
              className="rounded border border-gray-800 text-sm w-full font-normal leading-[18px] text-black   tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0 "
              placeholder="Tell us more about it"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="Reaction"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Reaction
            </label>
            <input
              type="text"
              id="Reaction"
              ref={PostReactionElement}
              className="rounded border border-gray-800 text-sm w-full font-normal leading-[18px] text-black   tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              placeholder="How many people reacted to this post"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="tags"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Enter your Hashtags here
            </label>
            <input
              type="text"
              id="title"
              ref={tagsElement}
              className="rounded border border-gray-800 text-sm w-full font-normal leading-[18px] text-black   tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              placeholder="How are You feeling today"
            />
          </div>

          <button
            type="submit"
            className="bg-[#4808f9] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default Createpost;
