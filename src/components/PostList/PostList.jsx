import { Link } from 'react-router-dom'
import './PostList.css'
import PostCard from '../Posts/PostCard'

// import { useState } from 'react'

const PostList = (props) => {
  return (
    <>
      <main className='layout'>
        <div className='main-feed'>
          {props.posts.length !== 0 ?
            props.posts.map((post) => {
              return <PostCard 
                post={post}
                key={post._id}
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
