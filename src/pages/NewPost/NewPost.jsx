import { useState } from "react";
import styles from "./NewPost.module.css";
import MainFeedBars from "../../components/MainFeedBars/MainFeedBars";

const NewPost = ({user, userProfile, handleAddPost, allPosts}) => {
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
    handleAddPost(form);
  };



  return (
    <>
    <MainFeedBars user={user} userProfile={userProfile} allPosts={allPosts}/>
      <div className={styles.container}>
        <h1>Post a Feel</h1>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
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
            
          </div>
          <label htmlFor="emotion-input">What emotion are you feeling?</label>
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
          <div className={styles.checkboxContainer}>
            <label>
              {form.public
                ? <p>Public <i className="fa-solid fa-earth-americas"></i></p>
                : <p>Public <i className="fa-solid fa-earth-americas"></i></p>}
            </label>
            <input
              checked={form.public}
              className='checkbox'
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
    </>
  );
};

export default NewPost;
