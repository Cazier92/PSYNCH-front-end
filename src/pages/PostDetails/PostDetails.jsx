import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./PostDetails.module.css";

import * as postService from "../../services/emotionPostService";

const PostDetails = (props) => {
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

  return (
    <div>
      <h1>Post Details</h1>
    </div>
  );
};

export default PostDetails;
