import { Link } from 'react-router-dom'
import './MainFeed.css'
import PostList from '../PostList/PostList'


// import { useState } from 'react'

const MainFeed = ({posts}) => {
  return (
    <>
      <div className='btns-container'>
        <button className='global-btn'>
          For You
        </button>
        <button className='friends-btn'>
          Friends
        </button>
      </div>
      <PostList posts={posts} />
      
    </>
  )
}



export default MainFeed