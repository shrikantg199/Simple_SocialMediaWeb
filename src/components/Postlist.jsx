import { useContext } from "react";
import Post from "./post";
import { PostList as PostListData } from "../store/PostListProvider";

const Postlist = () => {
  const { postList } = useContext(PostListData);
  console.log(postList);

  return (
    <div className="posts w-1/4 m-6 text-slate-100 inline-grid gap-6">
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Postlist;
