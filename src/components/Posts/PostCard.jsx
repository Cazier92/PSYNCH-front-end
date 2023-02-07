import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post }) => {
  // console.log(post)
  const [showReactions, setShowReactions] = useState(false)

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
          <i id="reaction-btn" className='fa-solid fa-heart'
          onClick={() => (setShowReactions(!showReactions))}></i>

          <div className={ `reaction-expand ${showReactions ? "active" : "inactive"}` }>
              <i class="fa-solid fa-heart ex-reaction"></i>
              <i class="fa-solid fa-champagne-glasses ex-reaction"></i>
              <i class="fa-solid fa-hand-holding-medical ex-reaction"></i>
              <i class="fa-solid fa-face-grin-tears ex-reaction"></i>
              <i class="fa-solid fa-thumbs-up ex-reaction"></i>
              <i class="fa-solid fa-lightbulb ex-reaction"></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostCard;
