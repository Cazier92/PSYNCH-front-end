import styles from "./CommentCard.module.css";
import { Link } from "react-router-dom";
import moment from "moment";

const CommentCard = ({ comment, post, user, postId, handleDeleteComment }) => {
  // const formatted = moment
  //   .utc(comment.createdAt)
  //   .local()
  //   .startOf("seconds")
  //   .fromNow();

  return (
    <article className={styles.container}>
      <blockquote class={styles.speechBubble}>
        {/* <p className={styles.timeStamp}>{formatted}</p> */}
        {/* <div className={styles.avatarImg}>{post.author.avatar}</div> */}
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
