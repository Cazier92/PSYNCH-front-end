import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PostDetails.module.css";

import * as postService from "../../services/emotionPostService";

import NewComment from "../../components/NewComment/NewComment";
import Comments from "../../components/Comments/Comments";

const PostDetails = ({ user, handleDeletePost, posts }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const down = ["Bored", "Stressed", "Tired"];
  const fearful = ["Anxious", "Rejected", "Scared"];
  const angry = ["Mad", "Jealous", "Betrayed"];
  const disgusted = ["Embarrassed", "Disgusted"];
  const sad = ["Lonely", "Guilty", "Hurt"];
  const happy = ["Optimistic", "Peaceful", "Powerful", "Accepted", "Joyful"];
  const surprised = ["Startled", "Confused", "Excited", "Amazed"];

  const decideColor = () => {
    if (down.includes(post.emotion)) {
      return "#5851919F";
    }
    if (fearful.includes(post.emotion)) {
      return "#DA41679F";
    }
    if (angry.includes(post.emotion)) {
      return "#E66536AF";
    }
    if (disgusted.includes(post.emotion)) {
      return "#3E89149F";
    }
    if (sad.includes(post.emotion)) {
      return "#53B3CB9F";
    }
    if (happy.includes(post.emotion)) {
      return "#FDE74C7F";
    }
    if (surprised.includes(post.emotion)) {
      return "#F188058F";
    }
  };

  const handleAddComment = async (commentData) => {
    const newComment = await postService.createComment(id, commentData);
    setPost({ ...post, comments: [newComment, ...post.comments] });
  };

  const handleDeleteComment = async (postId, commentId) => {
    await postService.deleteComment(postId, commentId);
    setPost({
      ...post,
      comments: post.comments.filter((c) => c._id !== commentId),
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      const data = await postService.show(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  return post ? (
    <div className={styles.mainContainer}>
      <main className={styles.container}>
        <div className={styles.postDetailCard}>
          <div
            className={styles.postHeaders}
            style={{ backgroundColor: decideColor() }}
          >
            <div>
              <img className="post-avatar" src={post.author.photo} alt="" />
            </div>
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
          <div className={styles.reactionContainer}>
            {post.reactions.length
              ? (() => {
                  const reactionCount = post.reactions.reduce(
                    (count, reaction) => {
                      count[reaction.reaction] = count[reaction.reaction]
                        ? count[reaction.reaction] + 1
                        : 1;
                      return count;
                    },
                    {}
                  );

                  return Object.entries(reactionCount).map(
                    ([reaction, count]) => {
                      switch (reaction) {
                        case "Love":
                          return (
                            <div className={styles.reactCount}>
                              <i className="fa-solid fa-heart ex-reaction"></i>
                              <div className={styles.countContainer}>
                                {count}
                              </div>
                            </div>
                          );
                        case "Like":
                          return (
                            <div className={styles.reactCount}>
                              <i className="fa-solid fa-thumbs-up ex-reaction"></i>
                              <div className={styles.countContainer}>
                                {count}
                              </div>
                            </div>
                          );
                        case "Celebrate":
                          return (
                            <div className={styles.reactCount}>
                              <i className="fa-solid fa-champagne-glasses ex-reaction"></i>
                              <div className={styles.countContainer}>
                                {count}
                              </div>
                            </div>
                          );
                        case "Support":
                          return (
                            <div className={styles.reactCount}>
                              <i className="fa-solid fa-hand-holding-medical ex-reaction"></i>
                              <div className={styles.countContainer}>
                                {count}
                              </div>
                            </div>
                          );
                        case "Funny":
                          return (
                            <div className={styles.reactCount}>
                              <i className="fa-solid fa-face-grin-tears ex-reaction"></i>
                              <div className={styles.countContainer}>
                                {count}
                              </div>
                            </div>
                          );
                        case "Curious":
                          return (
                            <div className={styles.reactCount}>
                              <i className="fa-solid fa-lightbulb ex-reaction"></i>
                              <div className={styles.countContainer}>
                                {count}
                              </div>
                            </div>
                          );
                        default:
                          return null;
                      }
                    }
                  );
                })()
              : "No reaction yet!"}
          </div>

          <div className={styles.publicPrivate}>
            <p>
              {post.public ? (
                <i class="fa-solid fa-earth-americas"></i>
              ) : (
                <i class="fa-solid fa-lock"></i>
              )}
            </p>
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
        <Comments
          post={post}
          comments={post.comments}
          user={user}
          postId={id}
          handleDeleteComment={handleDeleteComment}
        />
      </section>
    </div>
  ) : (
    <main>
      <p>Loading...</p>
    </main>
  );
};

export default PostDetails;
