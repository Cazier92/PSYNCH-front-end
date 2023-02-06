import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post }) => {
  // console.log(post)
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-avatar">{post.author.avatar}</div>
        <p>{post.author.name}</p>
      </div>
      <div className="post-main">
        <div className="post-text">
          <p>{post.content}</p>
        </div>
        <div className="emotion-section">
          <p>{post.emotion}</p>
        </div>
      </div>
      <div className="post-footer">
        <div className="post-reaction">
          <Link to={`/emotionPosts/${post._id}`}>
            <i id="reply-btn" class="fa-solid fa-reply"></i>
          </Link>
          <i id="reaction-btn" class="fa-solid fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
