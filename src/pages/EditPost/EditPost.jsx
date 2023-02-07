import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./EditPost.module.css";

const EditPost = ({ handleUpdatePost }) => {
  const { state } = useLocation();
  const [form, setForm] = useState(state);

  console.log(state);
  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdatePost(form);
  };

  return (
    <div>
      <h1>Edit Post Page</h1>
      <div className={styles.container}>
        <h1>What's on your mind today?</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.emotions}>
            {form.emotion === "Bored" && (
              <span role="img" aria-label="Bored">
                😒
              </span>
            )}
            {form.emotion === "Stressed" && (
              <span role="img" aria-label="Stressed">
                😫
              </span>
            )}
            {form.emotion === "Tired" && (
              <span role="img" aria-label="Tired">
                😴
              </span>
            )}
            {form.emotion === "Anxious" && (
              <span role="img" aria-label="Anxious">
                😰
              </span>
            )}
            {form.emotion === "Rejected" && (
              <span role="img" aria-label="Rejected">
                😔
              </span>
            )}
            {form.emotion === "Scared" && (
              <span role="img" aria-label="Scared">
                😱
              </span>
            )}
            {form.emotion === "Mad" && (
              <span role="img" aria-label="Mad">
                😠
              </span>
            )}
            {form.emotion === "Jealous" && (
              <span role="img" aria-label="Jealous">
                😒
              </span>
            )}
            {form.emotion === "Betrayed" && (
              <span role="img" aria-label="Betrayed">
                😔
              </span>
            )}
            {form.emotion === "Embarrassed" && (
              <span role="img" aria-label="Embarrassed">
                😳
              </span>
            )}
            {form.emotion === "Disgusted" && (
              <span role="img" aria-label="Disgusted">
                🤢
              </span>
            )}
            {form.emotion === "Lonely" && (
              <span role="img" aria-label="Lonely">
                😔
              </span>
            )}
            {form.emotion === "Guilty" && (
              <span role="img" aria-label="Guilty">
                😔
              </span>
            )}
            {form.emotion === "Hurt" && (
              <span role="img" aria-label="Hurt">
                😢
              </span>
            )}
            {form.emotion === "Optimistic" && (
              <span role="img" aria-label="Optimistic">
                😃
              </span>
            )}
            {form.emotion === "Peaceful" && (
              <span role="img" aria-label="Peaceful">
                😌
              </span>
            )}
            {form.emotion === "Powerful" && (
              <span role="img" aria-label="Powerful">
                😎
              </span>
            )}
            {form.emotion === "Accepted" && (
              <span role="img" aria-label="Accepted">
                😊
              </span>
            )}
            {form.emotion === "Joyful" && (
              <span role="img" aria-label="Joyful">
                😊
              </span>
            )}
          </div>
          <label htmlFor="emotion-input">How are you feeling today?</label>
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
            cols="40"
            rows="10"
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
