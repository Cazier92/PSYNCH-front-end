import styles from "./CommentCard.module.css";
import { Link } from "react-router-dom";

const CommentCard = ({ comment, post, user, postId }) => {
  return (
    <article className={styles.container}>
      {/* <div className={styles.cardContainer}>
        <h3>{comment.content}</h3>
        <p>{comment.author.name}</p>
      </div> */}
      <blockquote class={styles.speechBubble}>
        <div className={styles.avatarImg}>{post.author.avatar}</div>
        <p>{comment.content}</p>
        <cite>{comment.author.name}</cite>
        {comment.author._id === user.profile && (
          <>
            <Link
              to={`/emotionPosts/${postId}/comments/${comment._id}`}
              state={comment}
            >
              EDIT
            </Link>
          </>
        )}
      </blockquote>
    </article>
  );
};

export default CommentCard;
