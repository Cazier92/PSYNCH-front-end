import styles from "./CommentCard.module.css";

const CommentCard = ({ comment, post }) => {
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
      </blockquote>
    </article>
  );
};

export default CommentCard;
