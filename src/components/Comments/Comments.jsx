import CommentCard from "../CommentCard/CommentCard";

const Comments = ({ comments, user }) => {
  if (!comments) return <h4>No Comments</h4>;

  return (
    <>
      {comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} user={user} />
      ))}
    </>
  );
};

export default Comments;
