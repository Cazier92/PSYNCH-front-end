import React from 'react';
import "./PostCard.css"


const PostCard = ({ post }) => {
  console.log(post)
  return ( 
    <div className='card-container'>
      <div className='post-avatar'>{post.author.avatar}</div>
      <h2>{post.author.name}</h2>
      <p>{post.emotion}</p>
      <p>{post.content}</p>
    </div>
   );
}
 
export default PostCard