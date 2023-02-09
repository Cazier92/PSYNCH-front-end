import CommentCard from "../CommentCard/CommentCard";

const Comments = ({ comments, user, post, postId, handleDeleteComment }) => {
  if (!comments) return <h4>No Comments</h4>;

  return (
    <>
      {comments.map((comment) => (
        <CommentCard
          key={comment._id}
          post={post}
          comment={comment}
          user={user}
          postId={postId}
          handleDeleteComment={handleDeleteComment}
        />
      ))}
    </>
  );
};

export default Comments;
