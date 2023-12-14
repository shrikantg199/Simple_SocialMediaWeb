import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Introduction to JavaScript",
    body: "JavaScript is a powerful scripting language...",
    reactions: "60",
    userId: "123",
    tags: ["JavaScript", "Web Development", "Programming"],
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListProvider = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_post") {
    newPostList = currPostList.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_INITIAL_POSTS")
    newPostList = action.payload.posts;
  else if (action.type === "ADD_POST")
    newPostList = [action.payload, ...currPostList];

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListProvider,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, Posttitle, Postbody, PostReaction, tags) => {
    console.log(userId, Posttitle, Postbody, PostReaction, tags);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: Posttitle,
        body: Postbody,
        reactions: PostReaction,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_post",
      payload: postId,
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
