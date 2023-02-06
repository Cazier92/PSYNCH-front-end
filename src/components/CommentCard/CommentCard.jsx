import styles from "./CommentCard.module.css";

const CommentCard = ({ comment }) => {
  return (
    <article className={styles.container}>
      <div className={styles.cardContainer}>
        <h3>{comment.content}</h3>
        <p>{comment.author.name}</p>
      </div>
    </article>
  );
};

export default CommentCard;
