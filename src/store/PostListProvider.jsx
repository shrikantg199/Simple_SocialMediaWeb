import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Introduction to JavaScript",
    body: "JavaScript is a powerful scripting language...",
    Reaction: "60",
    userId: "123",
    tags: ["JavaScript", "Web Development", "Programming"],
  },
  {
    id: "2",
    userId: "456",
    title: "Exploring Machine Learning",
    body: "Machine learning is a fascinating field that...",
    Reaction: "35",
    tags: ["Machine Learning", "Artificial Intelligence", "Data Science"],
  },
  {
    id: "3",
    userId: "789",
    title: "Healthy Cooking Tips",
    body: "Cooking nutritious and delicious meals is...",
    Reaction: "10",
    tags: ["Cooking", "Healthy Living", "Recipes"],
  },
  {
    id: "4",
    userId: "101",
    title: "Travel Diaries: Paris Adventure",
    body: "A journey through the enchanting streets of Paris...",
    Reaction: "90",
    tags: ["Travel", "Adventure", "Paris"],
  },
  {
    id: "5",
    userId: "202",
    title: "Gaming Essentials for Beginners",
    body: "Getting started with gaming? Here are some essential tips...",
    Reaction: "20",
    tags: ["Gaming", "Beginners Guide", "Tech"],
  },
  {
    id: "6",
    userId: "303",
    title: "Mindfulness Meditation Techniques",
    body: "Practicing mindfulness can bring peace and clarity to your life...",
    Reaction: "40",
    tags: ["Mindfulness", "Meditation", "Wellness"],
  },
];

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListProvider = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_post") {
    newPostList = currPostList.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_POST")
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
        Reaction: PostReaction,
        userId: userId,
        tags: tags,
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
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
