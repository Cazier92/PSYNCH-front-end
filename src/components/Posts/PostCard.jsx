
import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post, user }) => {
  // console.log(post)
  
  const [showReactions, setShowReactions] = useState(false)

  const [userReaction, setUserReaction] = useState(false)

  const [reactionType, setReactionType] = useState(null)

  //* define reaction state
  //* start with create and delete reaction, then move on to update
  //* see if there is a reaction with an author._id matching the user.profile
  //* if there isn't, state remains false
  //* if there is, setState true
  
  // if (post.reactions[0] !== undefined) {
  //   console.log(post.reactions.some(reaction => reaction.author === user.profile))
  // }


  useEffect(() => {
    if (post.reactions[0] !== undefined) {
      if(post.reactions.some(reaction => reaction.author === user.profile)) {
        setUserReaction(true)
        // console.log(post.reactions.find(reaction => reaction.author === user.profile).reaction)
        setReactionType(post.reactions.find(reaction => reaction.author === user.profile).reaction)
        // console.log(reactionType)
      }
    }
  }, [post.reactions, reactionType, user]);
  


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
