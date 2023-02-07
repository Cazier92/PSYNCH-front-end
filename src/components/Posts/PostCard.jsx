
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

const PostCard = ({ post, user, userReaction, setUserReaction, reactionType, setReactionType, reactionId, setReactionId, handleDecideAction }) => {
  // console.log(post)
  
  const [showReactions, setShowReactions] = useState(false)




    //!This Stays:
  useEffect(() => {
    if (post.reactions[0] !== undefined) {
      if(post.reactions.some(reaction => reaction.author === user.profile)) {
        setUserReaction(true)
        // console.log(post.reactions.find(reaction => reaction.author === user.profile).reaction)
        setReactionType(post.reactions.find(reaction => reaction.author === user.profile).reaction)
        // console.log(reactionType)
        setReactionId(post.reactions.find(reaction => reaction.author === user.profile)._id)
      }
    }
  }, [post.reactions, reactionType, setReactionId, setReactionType, setUserReaction, user]);
  
  //!This Stays:
  const postId = post._id






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
          
          {/* <i id="reaction-btn" className='fa-solid fa-heart'
          onClick={() => (setShowReactions(!showReactions))}></i> */}

          <ReactionButton reactionType={reactionType} setShowReactions={setShowReactions} showReactions={showReactions}/>

          <div className={ `reaction-expand ${showReactions ? "active" : "inactive"}` }>
              <i class="fa-solid fa-heart ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Love', reactionId ); setShowReactions(!showReactions)} }></i>
              <i class="fa-solid fa-champagne-glasses ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Celebrate', reactionId );setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-hand-holding-medical ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Support', reactionId ); setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-face-grin-tears ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Funny', reactionId ); setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-thumbs-up ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Like', reactionId ); setShowReactions(!showReactions)}}></i>
              <i class="fa-solid fa-lightbulb ex-reaction" onClick={() => {handleDecideAction(post, postId, 'Curious', reactionId ); setShowReactions(!showReactions)}}></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostCard;
