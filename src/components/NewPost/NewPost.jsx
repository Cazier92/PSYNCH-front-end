import { useState } from "react";

const NewPost = (props) => {
  const [form, setForm] = useState({
    emotion: "Bored",
    content: "",
    public: true,
  });

  const handleChange = ({ target }) => {
    if (target.type === "checkbox") {
      setForm({ ...form, [target.name]: target.checked });
    } else {
      setForm({ ...form, [target.name]: target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddPost(form);
  };

  console.log(form);

  return (
    <div>
      <h1>What's on your mind today?</h1>
      <form onSubmit={handleSubmit}>
        <div>
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
          {form.emotion === "Startled" && (
            <span role="img" aria-label="Joyful">
              😬
            </span>
          )}
          {form.emotion === "Confused" && (
            <span role="img" aria-label="Joyful">
              🤔
            </span>
          )}
          {form.emotion === "Excited" && (
            <span role="img" aria-label="Joyful">
              🤩
            </span>
          )}
          {form.emotion === "Amazed" && (
            <span role="img" aria-label="Joyful">
              😆
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
        <div>
          <label>
            {form.public
              ? "It's set to public [🌐]"
              : "It's set to private [🥷🏻]"}
          </label>
          <input
            checked={form.public}
            type="checkbox"
            name="public"
            onChange={({ target }) =>
              setForm({ ...form, public: target.checked })
            }
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default NewPost;
