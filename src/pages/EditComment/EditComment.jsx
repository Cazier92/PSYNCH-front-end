import { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./EditComment.module.css";

// Services
import * as postService from "../../services/emotionPostService";

const EditComment = ({userProfile}) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { postId, commentId } = useParams();
  const [form, setForm] = useState(state);

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postService.updateComment(postId, commentId, form);
    navigate(`/emotionPosts/${postId}`);
  };

  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <h1>Edit Comment</h1>
          <textarea
            required
            type="text"
            name="content"
            id="text-input"
            value={form.content}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Update Comment</button>
        </form>
      </main>
    </div>
  );
};

export default EditComment;
