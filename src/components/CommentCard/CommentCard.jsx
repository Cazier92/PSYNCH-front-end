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
        

        <div className={styles.commentAuthorContent}>
          <p className={styles.commentContent}>{comment.content}</p>
          <cite className={styles.commentAuthor}>{comment.author.name}</cite>
        </div>
                {comment.author._id === user.profile && (
          <div className={styles.buttonBox}>
            <Link
             className={styles.btnLink}
             to={`/emotionPosts/${postId}/comments/${comment._id}`}
             state={comment}
            >
              <i  class="fa-solid fa-pen-to-square"></i>
            </Link>
            <i onClick={() => handleDeleteComment(postId, comment._id)}class="fa-solid fa-xmark " ></i>
          </div>
        )}

      </blockquote>
    </article>
  );
};

export default CommentCard;
