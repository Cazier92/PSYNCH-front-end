import { Link } from 'react-router-dom'
import './MainFeed.css'
import PostList from '../../components/PostList/PostList'

import { useState } from 'react'





const MainFeed = ({posts, user}) => {
  let [selectedGlobal, setSelectedGlobal] = useState(true)
  let [selectedFriends, setSelectedFriends] = useState(false)
  console.log("Global:", selectedGlobal)
  console.log("Friends:", selectedFriends)

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
        <div id='lsb-icon-1'>
          <i class="fa-solid fa-house fa-2x"></i>
        </div>
        <div id='lsb-icon-2'>
          <i class="fa-solid fa-user fa-2x"></i>
        </div>
        <div id='lsb-icon-3'>
          <i class="fa-solid fa-user-group fa-2x"></i>
        </div>
        <div id='lsb-icon-4'>
          <i class="fa-solid fa-pen-to-square fa-2x"></i>
        </div>
      </div>


      <div className='right-sidebar'>
        <div id='rsb-icon-1'>
          <i class="fa-solid fa-chart-simple fa-2x"></i>
        </div>
      </div>

      
      <div className='bottom-sidebar'>
        <div>
            <i class="fa-solid fa-house fa-2x"></i>
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
          <p className='empty-text'>Your friends haven't posted!</p>
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