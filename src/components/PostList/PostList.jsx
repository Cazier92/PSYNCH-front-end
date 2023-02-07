import { Link } from 'react-router-dom'
import './PostList.css'
import PostCard from '../Posts/PostCard'

// import { useState } from 'react'

const PostList = ({posts, user, userReaction, setUserReaction, reactionType, setReactionType, reactionId, setReactionId, handleDecideAction}) => {
  return (
    <>
      <main className='layout'>
        <div className='main-feed'>
          {posts.length !== 0 ?
            posts.map((post) => {
              return <PostCard 
                post={post}
                key={post._id}
                user={user}
                userReaction={userReaction} setUserReaction={setUserReaction} reactionType={reactionType} setReactionType={setReactionType} reactionId={reactionId} setReactionId={setReactionId} handleDecideAction={handleDecideAction}
              />
            })
            :   
            <p>Loading...</p> 
          } 
        </div>
      </main>
    </>
  )
}



export default PostList
