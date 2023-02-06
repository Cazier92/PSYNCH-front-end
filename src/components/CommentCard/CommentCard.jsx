const CommentCard = ({ comment }) => {
  return (
    <article>
      <p>{comment.content}</p>
    </article>
  );
};

export default CommentCard;
