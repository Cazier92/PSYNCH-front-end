import { Link } from 'react-router-dom'
import './MainFeed.css'

import { useState, useEffect } from 'react'

//COMPONENETS
import PostList from '../../components/PostList/PostList'
import FriendList from '../../components/FriendList/FriendList'

//SERVICES
import * as emotionPostService from '../../services/emotionPostService'




const MainFeed = ({posts, user}) => {

  //STATES
  let [selectedGlobal, setSelectedGlobal] = useState(true)
  let [selectedFriendsFeed, setSelectedFriendsFeed] = useState(false)
  let [selectedFriendsList, setSelectedFriendsList] = useState(false)
  let [selectedHome, setSelectedHome] = useState(true)

  // console.log("Global:", selectedGlobal)
  // console.log("Friends:", selectedFriends)

  const [feed, setFeed] = useState([])

  useEffect(() => {
    const fetchFeed = async () => {
      const feedData = await emotionPostService.feed()
      setFeed(feedData)
    }
    fetchFeed()
  }, [])



    function toggle (){
    if (selectedFriendsFeed === true){
     selectedGlobal = false
    }
    if (selectedGlobal === false){
      selectedFriendsFeed = true
    }
  }
  toggle()
 

  return (
    <>
      <div className='btns-container'>
        <button 
          className={`global-btn ${selectedGlobal ? "active" : "inactive"}`}
          onClick={() => (setSelectedGlobal(!selectedGlobal), setSelectedFriendsFeed(!selectedFriendsFeed))}
        >
          For You
        </button>
        <button className={`friends-btn ${selectedFriendsFeed ? "active" : "inactive"}`}
          onClick={() => (setSelectedFriendsFeed(!selectedFriendsFeed), setSelectedGlobal(!selectedGlobal))}
        >
          Friends
        </button>
      </div>

      <div className={`left-sidebar ${selectedFriendsList ? "friendsActive" : "friendsInactive"}`}>
        <div className='component-container'>
          <FriendList user={user} />
        </div>
        <div className='ls-icon-wrapper'>
          <div id='ls-icon-container' className={`home-icon ${selectedHome ? "active" : "inactive"}`} onClick={() => (setSelectedHome(!selectedHome))}>
            <i id='ls-icon' class="fa-solid fa-house"></i>
          </div>
          <div id='ls-icon-container'>
            <i id='ls-icon' class="fa-solid fa-user"></i>
          </div>

          <div id='ls-icon-container' 
            className={`friends-list-icon ${selectedFriendsList ? "active" : "inactive"}`}
            onClick={() => (setSelectedFriendsList(!selectedFriendsList))}>
            <i id='ls-icon' class="fa-solid fa-user-group" ></i>
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

      {selectedFriendsFeed ? (
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