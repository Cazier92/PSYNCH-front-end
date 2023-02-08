import styles from "./CommentCard.module.css";
import { Link } from "react-router-dom";

const CommentCard = ({ comment, post, user, postId, handleDeleteComment }) => {
  return (
    <article className={styles.container}>
      {/* <div className={styles.cardContainer}>
        <h3>{comment.content}</h3>
        <p>{comment.author.name}</p>
      </div> */}
      <blockquote class={styles.speechBubble}>
        <div className={styles.avatarImg}>{post.author.avatar}</div>
        <p className={styles.commentContent}>{comment.content}</p>
        <cite>{comment.author.name}</cite>
        {comment.author._id === user.profile && (
          <div className={styles.buttonBox}>
            <button>
              <Link
                className={styles.btnLink}
                to={`/emotionPosts/${postId}/comments/${comment._id}`}
                state={comment}
              >
                EDIT
              </Link>
            </button>
            <button onClick={() => handleDeleteComment(postId, comment._id)}>
              DELETE
            </button>
          </div>
        )}
      </blockquote>
    </article>
  );
};

export default CommentCard;
