import { Link } from 'react-router-dom'
import './MainFeed.css'
import PostList from '../PostList/PostList'

import { useState } from 'react'


const MainFeed = ({posts}) => {
  const [selected, setSelected] = useState()
  return (
    <>
      <div className='btns-container'>
        <button 
          className={`global-btn ${selected ? "active" : "inactive"}`}
          onClick={() => setSelected(!selected)}
        >
          For You
        </button>
        <button className={`friends-btn ${selected ? "active" : "inactive"}`}
          onClick={() => setSelected(!selected)}
        >
          Friends
        </button>
      </div>
      {}
      <PostList posts={posts} />
      
    </>
  )
}



export default MainFeed