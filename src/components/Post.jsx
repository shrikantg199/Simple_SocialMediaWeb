import PropTypes from "prop-types";
import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { PostList } from "../store/post-store-list";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card  bg-base-100 shadow-xl ml-12 ">
        <div className="card-body flex">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.body}</p>
          <FcLike className="text-white ml-96 text-3xl "></FcLike>
          <span className="ml-96">{post.reactions}</span>
          <div className="flex ">
            {post.tags.map((tag) => (
              <span
                className="badge text-bg-primary bg-white text-black p-4 "
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            className="btn btn-error w-32 ml-60"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    reactions: PropTypes.string.isRequired,
    // Add other properties as needed
  }).isRequired,
};

export default Post;
