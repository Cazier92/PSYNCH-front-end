
import React from "react";
import { useState, useEffect } from "react";

import * as emotionPostService from '../../services/emotionPostService'
import ReactionButton from "./ReactionButton";

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
  const [reactionId, setReactionId] = useState(null)

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
  }, [post.reactions, reactionType, user]);
  

  
  const postId = post._id

  const handleDecideAction = async (postId, reactionChoice, reactionId) => {
    if (userReaction && reactionChoice === reactionType) {
      // deleteReaction
      const deleteReaction = await emotionPostService.deleteReaction(postId, reactionId)
      setUserReaction(false)
      setReactionType(null)
      setReactionId(null)
    } else if (userReaction) {
      // updateReaction
      const reactionData = {reaction: reactionChoice}
      const updateReaction = await emotionPostService.updateReaction(postId, reactionData, reactionId)
      setReactionType(reactionChoice)
    } else {
      // addReaction
      const reactionData = {reaction: reactionChoice}
      const addReaction = await emotionPostService.addReaction(postId, reactionData)
      setUserReaction(true)
      setReactionType(reactionChoice)
      setReactionId(post.reactions.find(reaction => reaction.author === user.profile)._id)
    }
  }


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
          
          {/* <i id="reaction-btn" className='fa-solid fa-heart'
          onClick={() => (setShowReactions(!showReactions))}></i> */}

          <ReactionButton reactionType={reactionType} setShowReactions={setShowReactions} showReactions={showReactions}/>

          <div className={ `reaction-expand ${showReactions ? "active" : "inactive"}` }>
              <i class="fa-solid fa-heart ex-reaction" onClick={() => {handleDecideAction(postId, 'Love', reactionId )} }></i>
              <i class="fa-solid fa-champagne-glasses ex-reaction" onClick={() => {handleDecideAction(postId, 'Celebrate', reactionId )}}></i>
              <i class="fa-solid fa-hand-holding-medical ex-reaction" onClick={() => {handleDecideAction(postId, 'Support', reactionId )}}></i>
              <i class="fa-solid fa-face-grin-tears ex-reaction" onClick={() => {handleDecideAction(postId, 'Funny', reactionId )}}></i>
              <i class="fa-solid fa-thumbs-up ex-reaction" onClick={() => {handleDecideAction(postId, 'Like', reactionId )}}></i>
              <i class="fa-solid fa-lightbulb ex-reaction" onClick={() => {handleDecideAction(postId, 'Curious', reactionId )}}></i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostCard;
