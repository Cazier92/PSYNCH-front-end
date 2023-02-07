
import React from "react";
import { useState, useEffect } from "react";

import * as emotionPostService from '../../services/emotionPostService'
import ReactionButton from "./ReactionButton";

import { Link } from "react-router-dom";
import "./PostCard.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const PostCard = ({ post, user, handleDecideAction }) => {

  
  const [showReactions, setShowReactions] = useState(false)


  const iconState = post.reactions.find(reaction => reaction.author === user.profile)

  
  const postId = post._id
  const reactionId = post.reactions.find(reaction => reaction.author === user.profile)?._id
  const reactionCount = post.reactions.length 
  console.log('REACTION COUNT', reactionCount)


  // console.log('ICON STATE', iconState)


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
          <Link style={linkStyle} to={`/emotionPosts/${post._id}`}>
          <i id='reply-btn' class="fa-regular fa-comment"></i>
          </Link>
          


          <ReactionButton reactionType={iconState?.reaction} setShowReactions={setShowReactions} showReactions={showReactions}/>

          <div className={ `reaction-expand ${showReactions ? "active" : "inactive"}` }>
              <i class="fa-solid fa-heart ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Love', reactionId ); setShowReactions(!showReactions)} }></i>
              <i class="fa-solid fa-champagne-glasses ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Celebrate', reactionId );setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-hand-holding-medical ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Support', reactionId ); setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-face-grin-tears ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Funny', reactionId ); setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-thumbs-up ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Like', reactionId ); setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-lightbulb ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Curious', reactionId ); setShowReactions(!showReactions)}}></i>
          </div>
          <div>
            <p>{reactionCount}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostCard;
