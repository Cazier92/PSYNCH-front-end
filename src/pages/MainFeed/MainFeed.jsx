import { Link } from 'react-router-dom'
import './MainFeed.css'
import PostList from '../PostList/PostList'


// import { useState } from 'react'

const MainFeed = ({posts}) => {
  return (
    <>
       <PostList posts={posts} />
      
    </>
  )
}



export default MainFeed