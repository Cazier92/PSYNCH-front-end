import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import styles from "./PostDetails.module.css";

import * as postService from "../../services/emotionPostService";

const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.show(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  console.log("Post State", post);

  return post ? (
    <main>
      <h1>Post Details</h1>
      <div className="post-avatar">{post.author.avatar}</div>
      <h2>{post.author.name}</h2>
      <h2>{post.content}</h2>
      <p>{post.emotion}</p>
    </main>
  ) : (
    <main>
      <p>Loading...</p>
    </main>
  );
};

export default PostDetails;
