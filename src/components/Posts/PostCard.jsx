import React from "react";
import { useState } from "react";


import ReactionButton from "./ReactionButton";
import moment from "moment";

import { Link } from "react-router-dom";
import "./PostCard.css";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const PostCard = ({ post, user, handleDecideAction }) => {
  const [showReactions, setShowReactions] = useState(false);

  const iconState = post.reactions.find(
    (reaction) => reaction.author === user.profile
  );

  const postId = post._id;
  const reactionId = post.reactions.find(
    (reaction) => reaction.author === user.profile
  )?._id;
  const reactionCount = post.reactions.length;
  const commentsCount = post.comments.length;

  const formatted = moment
    .utc(post.createdAt)
    .local()
    .startOf("seconds")
    .fromNow();



  const down = ["Bored", "Stressed", "Tired"];
  const fearful = ["Anxious", "Rejected", "Scared"];
  const angry = ["Mad", "Jealous", "Betrayed"];
  const disgusted = ["Embarrassed", "Disgusted"];
  const sad = ["Lonely", "Guilty", "Hurt"];
  const happy = ["Optimistic", "Peaceful", "Powerful", "Accepted", "Joyful"];
  const surprised = ["Startled", "Confused", "Excited", "Amazed"];

  const decideColor = () => {
    if (down.includes(post.emotion)) {
      return "#585191FF 0px 0px 15px";
    }
    if (fearful.includes(post.emotion)) {
      return "#DA4167FF 0px 0px 15px";
    }
    if (angry.includes(post.emotion)) {
      return "#E66536FF 0px 0px 15px";
    }
    if (disgusted.includes(post.emotion)) {
      return "#3E8914FF 0px 0px 15px";
    }
    if (sad.includes(post.emotion)) {
      return "#53B3CBFF 0px 0px 15px";
    }
    if (happy.includes(post.emotion)) {
      return "#FDE74CFF 0px 0px 15px";
    }
    if (surprised.includes(post.emotion)) {
      return  "#F18805FF 0px 0px 15px"
    }
  };

  const privatePost = () => {
    if (post.public === true) {
      return <i class="fa-solid fa-earth-americas"></i>;
    }
    if (post.public === false) {
      return <i class="fa-solid fa-lock"></i>;
    }
  };

  return (
    <div className="post-container" style={{ boxShadow: decideColor() }} >
      <div className="post-header" >
        <div className="left-header">
          <Link to={`/profile/${post.author._id}`}>
            <img
              className="post-avatar"
              src={post.author.photo}
              alt="profile img"
            />
          </Link>
          <Link className="profile-link" to={`/profile/${post.author._id}`}>
            <p className="author-name">{post.author.name}</p>
          </Link>
        </div>
        <div className="right-header">
          <p>{formatted}</p>
        </div>
      </div>
      <Link to={`/emotionPosts/${post._id}`} style={linkStyle} >
      
        <div className="post-main">
          <div className="post-text">
            <p>{post.content}</p>
          </div>
          <div className="emotion-section">
            <p>{post.emotion}</p>
          </div>
        </div>
      </Link>
      <div className="post-footer">
        <div className="post-reaction">
          <div className="interactions">
            <div className="total-comments">
              <Link style={linkStyle} to={`/emotionPosts/${post._id}`}>
                <i id="reply-btn" class="fa-regular fa-comment"></i>
              </Link>
              {commentsCount}
            </div>
            <div className="total-reactions">
              <ReactionButton
                reactionType={iconState?.reaction}
                setShowReactions={setShowReactions}
                showReactions={showReactions}
              />
              {reactionCount}
            </div>
          </div>

          <div
            className={`reaction-expand ${
              showReactions ? "active" : "inactive"
            }`}
          >
            <i
              class="fa-solid fa-heart ex-reaction"
              onClick={() => {
                handleDecideAction(post, postId, "Love", reactionId);
                setShowReactions(!showReactions);
              }}
            ></i>
            <i
              class="fa-solid fa-champagne-glasses ex-reaction"
              onClick={() => {
                handleDecideAction(post, postId, "Celebrate", reactionId);
                setShowReactions(!showReactions);
              }}
            ></i>
            <i
              class="fa-solid fa-hand-holding-medical ex-reaction"
              onClick={() => {
                handleDecideAction(post, postId, "Support", reactionId);
                setShowReactions(!showReactions);
              }}
            ></i>
            <i
              class="fa-solid fa-face-grin-tears ex-reaction"
              onClick={() => {
                handleDecideAction(post, postId, "Funny", reactionId);
                setShowReactions(!showReactions);
              }}
            ></i>
            <i
              class="fa-solid fa-thumbs-up ex-reaction"
              onClick={() => {
                handleDecideAction(post, postId, "Like", reactionId);
                setShowReactions(!showReactions);
              }}
            ></i>
            <i
              class="fa-solid fa-lightbulb ex-reaction"
              onClick={() => {
                handleDecideAction(post, postId, "Curious", reactionId);
                setShowReactions(!showReactions);
              }}
            ></i>
          </div>
          <div className="private-post">{privatePost()}</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
