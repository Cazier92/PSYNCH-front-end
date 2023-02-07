import { Link } from 'react-router-dom'
import './MainFeed.css'
import PostList from '../../components/PostList/PostList'
import * as emotionPostService from '../../services/emotionPostService'

import { useState, useEffect } from 'react'





const MainFeed = ({posts, user}) => {
  let [selectedGlobal, setSelectedGlobal] = useState(true)
  let [selectedFriends, setSelectedFriends] = useState(false)
  console.log("Global:", selectedGlobal)
  console.log("Friends:", selectedFriends)

  const [feed, setFeed] = useState([])

  useEffect(() => {
    const fetchFeed = async () => {
      const feedData = await emotionPostService.feed()
      setFeed(feedData)
    }
    fetchFeed()
  }, [])



    function toggle (){
    if (selectedFriends === true){
     selectedGlobal = false
    }
    if (selectedGlobal === false){
      selectedFriends = true
    }
  }
  toggle()
 

  return (
    <>
      <div className='btns-container'>
        <button 
          className={`global-btn ${selectedGlobal ? "active" : "inactive"}`}
          onClick={() => (setSelectedGlobal(!selectedGlobal), setSelectedFriends(!selectedFriends))}
        >
          For You
        </button>
        <button className={`friends-btn ${selectedFriends ? "active" : "inactive"}`}
          onClick={() => (setSelectedFriends(!selectedFriends), setSelectedGlobal(!selectedGlobal))}
        >
          Friends
        </button>
      </div>

      <div className='left-sidebar'>
        <div className='component-container'>
          yooo
        </div>
        <div className='ls-icon-wrapper'>
          <div id='ls-icon-container'>
            <i id='ls-icon' class="fa-solid fa-house"></i>
          </div>
          <div id='ls-icon-container'>
            <i id='ls-icon' class="fa-solid fa-user"></i>
          </div>
          <div id='ls-icon-container'>
            <i id='ls-icon' class="fa-solid fa-user-group"></i>
          </div>
          <div id='ls-icon-container'>
            <i id='ls-icon' class="fa-solid fa-pen-to-square"></i>
          </div>
        </div>
        
      </div>


      <div className='right-sidebar'>
        <div id='ls-icon-container'>
          <i id='ls-icon' class="fa-solid fa-chart-simple"></i>
        </div>
      </div>

      
      <div className='bottom-sidebar'>
        <div>
            <i class="fa-solid fa-house-2x"></i>
          </div>
          <div>
            <i class="fa-solid fa-user fa-2x"></i>
          </div>
          <div>
            <i class="fa-solid fa-user-group fa-2x"></i>
          </div>
          <div>
            <i class="fa-solid fa-pen-to-square fa-2x"></i>
          </div>
          <div>
          <i class="fa-solid fa-chart-simple fa-2x"></i>
          </div>
      </div>

      {selectedFriends ? (
        <>
          {/* <p className='empty-text'>Your friends haven't posted!</p> */}
          <PostList posts={feed} user={user}/>
        </>
      ):(
        <>
          <PostList posts={posts} user={user}/>
          
        </>
      )}  
    </>
  )
}



export default MainFeed