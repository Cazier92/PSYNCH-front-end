import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PostDetails.module.css";

import * as postService from "../../services/emotionPostService";

import NewComment from "../../components/NewComment/NewComment";
import Comments from "../../components/Comments/Comments";

const PostDetails = ({ user, handleDeletePost }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const handleAddComment = async (commentData) => {
    const newComment = await postService.createComment(id, commentData);
    setPost({ ...post, comments: [newComment, ...post.comments] });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.show(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  console.log("Post State", post);

  return post ? (
    <>
      <main className={styles.container}>
        <div className={styles.postDetailCard}>
          <div className={styles.postHeaders}>
            <div className="post-avatar">{post.author.avatar}</div>
            <h2>{post.author.name}</h2>
          </div>
          <h2>{post.content}</h2>
          <p>{post.emotion}</p>
          <div className={styles.emotions}>
            <div className={styles.emotions}>
              {post.emotion === "Bored" && (
                <span role="img" aria-label="Bored">
                  😒
                </span>
              )}
              {post.emotion === "Stressed" && (
                <span role="img" aria-label="Stressed">
                  😫
                </span>
              )}
              {post.emotion === "Tired" && (
                <span role="img" aria-label="Tired">
                  😴
                </span>
              )}
              {post.emotion === "Anxious" && (
                <span role="img" aria-label="Anxious">
                  😰
                </span>
              )}
              {post.emotion === "Rejected" && (
                <span role="img" aria-label="Rejected">
                  😔
                </span>
              )}
              {post.emotion === "Scared" && (
                <span role="img" aria-label="Scared">
                  😱
                </span>
              )}
              {post.emotion === "Mad" && (
                <span role="img" aria-label="Mad">
                  😠
                </span>
              )}
              {post.emotion === "Jealous" && (
                <span role="img" aria-label="Jealous">
                  😒
                </span>
              )}
              {post.emotion === "Betrayed" && (
                <span role="img" aria-label="Betrayed">
                  🤕
                </span>
              )}
              {post.emotion === "Embarrassed" && (
                <span role="img" aria-label="Embarrassed">
                  😳
                </span>
              )}
              {post.emotion === "Disgusted" && (
                <span role="img" aria-label="Disgusted">
                  🤢
                </span>
              )}
              {post.emotion === "Lonely" && (
                <span role="img" aria-label="Lonely">
                  😞
                </span>
              )}
              {post.emotion === "Guilty" && (
                <span role="img" aria-label="Guilty">
                  😔
                </span>
              )}
              {post.emotion === "Hurt" && (
                <span role="img" aria-label="Hurt">
                  😢
                </span>
              )}
              {post.emotion === "Optimistic" && (
                <span role="img" aria-label="Optimistic">
                  😃
                </span>
              )}
              {post.emotion === "Peaceful" && (
                <span role="img" aria-label="Peaceful">
                  😌
                </span>
              )}
              {post.emotion === "Powerful" && (
                <span role="img" aria-label="Powerful">
                  😎
                </span>
              )}
              {post.emotion === "Accepted" && (
                <span role="img" aria-label="Accepted">
                  😊
                </span>
              )}
              {post.emotion === "Joyful" && (
                <span role="img" aria-label="Joyful">
                  😊
                </span>
              )}
              {post.emotion === "Startled" && (
                <span role="img" aria-label="Joyful">
                  😬
                </span>
              )}
              {post.emotion === "Confused" && (
                <span role="img" aria-label="Joyful">
                  🤔
                </span>
              )}
              {post.emotion === "Excited" && (
                <span role="img" aria-label="Joyful">
                  🤩
                </span>
              )}
              {post.emotion === "Amazed" && (
                <span role="img" aria-label="Joyful">
                  😆
                </span>
              )}
            </div>
          </div>
          {post.author._id === user.profile && (
            <>
              <div className={styles.buttonContainer}>
                <Link to={`/emotionPosts/${id}/edit`} state={post}>
                  <button>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </Link>
                <button onClick={() => handleDeletePost(id)}>
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </main>
      <section>
        <NewComment handleAddComment={handleAddComment} />
        <Comments comments={post.comments} user={user} />
      </section>
    </>
  ) : (
    <main>
      <p>Loading...</p>
    </main>
  );
};

export default PostDetails;
