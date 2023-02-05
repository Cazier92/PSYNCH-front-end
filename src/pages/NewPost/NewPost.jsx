import { useState } from "react";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  const [form, setForm] = useState({
    emotion: "",
    content: "",
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddPost(form);
  };

  return (
    <div className={styles.container}>
      <h1>CREATE POST</h1>
      <form onSubmit={handleSubmit}>
        <select
          required
          name="emotion"
          id="emotion-input"
          value={form.emotion}
          onChange={handleChange}
        >
          <option value="Bored">Bored</option>
          <option value="Stressed">Stressed</option>
          <option value="Tired">Tired</option>
          <option value="Anxious">Anxious</option>
          <option value="Rejected">Rejected</option>
          <option value="Scared">Scared</option>
          <option value="Mad">Mad</option>
          <option value="Jealous">Jealous</option>
          <option value="Betrayed">Betrayed</option>
          <option value="Embarrassed">Embarrassed</option>
          <option value="Disgusted">Disgusted</option>
          <option value="Lonely">Lonely</option>
          <option value="Guilty">Guilty</option>
          <option value="Hurt">Hurt</option>
          <option value="Optimistic">Optimistic</option>
          <option value="Peaceful">Peaceful</option>
          <option value="Powerful">Powerful</option>
          <option value="Accepted">Accepted</option>
          <option value="Joyful">Joyful</option>
          <option value="Startled">Startled</option>
          <option value="Confused">Confused</option>
          <option value="Excited">Excited</option>
          <option value="Amazed">Amazed</option>
        </select>
        <label htmlFor="content-input">Write your post here</label>
        <textarea
          required
          type="text"
          name="content"
          id="content-input"
          value={form.content}
          onChange={handleChange}
          placeholder="Write your post here"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default NewPost;
