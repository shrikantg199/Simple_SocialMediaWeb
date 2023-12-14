import { useContext, useEffect, useState } from "react";
import Post from "./post";
import Errormsg from "./Errormsg";
import { PostList as PostListData } from "../store/post-store-list";
import LoadingSpinner from "./LoadingSpinner";
const Postlist = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setfetching(true);

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      });

    return () => {
      console.log("cleaning");
      controller.abort();
    };
  }, []);

  return (
    <div className="posts w-1/4 m-6 text-slate-100 inline-grid gap-6">
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Errormsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default Postlist;
