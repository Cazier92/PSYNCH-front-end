import { useState } from "react";
import styles from "./NewComment.module.css";

const NewComment = ({ handleAddComment }) => {
  const [form, setForm] = useState({ content: "" }); // If something doesn't work, look at this first!

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddComment(form);
    setForm({ content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        required
        style={{fontFamily: "Verdana", fontSize:"15px"}}
        type="text"
        name="content"
        id="text-input"
        value={form.content}
        placeholder="Add a comment"
        onChange={handleChange}
      ></textarea>
      <button id="comment-submit" type="submit">Comment</button>
    </form>
  );
};

export default NewComment;
