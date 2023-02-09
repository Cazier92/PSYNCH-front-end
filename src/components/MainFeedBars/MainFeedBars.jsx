import { Link } from "react-router-dom";
import "./MainFeedBars.css";

import { useState, useEffect } from "react";

//COMPONENETS
import FriendList from "../../components/FriendList/FriendList";
import Stats from "../../components/Stats/Stats"

//SERVICES


const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const MainFeedBars = ({ user, allPosts}) => {
  //STATES
  let [selectedFriendsList, setSelectedFriendsList] = useState(false);
  let [selectedHome, setSelectedHome] = useState(true);


  let [selectedStats, setSelectedStats] = useState(false)

  // console.log("Global:", selectedGlobal)
  // console.log("Friends:", selectedFriends)


  return (
    <>
      <div
        className={`left-sidebar ${
          selectedFriendsList ? "friendsActive" : "friendsInactive"
        }`}
        >
        <div className='component-container-left' >
          <div className={`loaded-component ${
              selectedFriendsList ? "active" : "inactive"
            }`}>
            <FriendList user={user} />
          </div>
        </div>
        <div className="ls-icon-wrapper">
          <div
            id="ls-icon-container"
            className={`home-icon ${selectedHome ? "active" : "inactive"}`}
            onClick={() => setSelectedHome(!selectedHome)}
          >
            <i id="ls-icon" class="fa-solid fa-house"></i>
          </div>
          <Link style={linkStyle} to={`/profile/${user.profile}`}>
            <div id="ls-icon-container">
              <i id="ls-icon" class="fa-solid fa-user"></i>
            </div>
          </Link>

          <div
            id="ls-icon-container"
            className={`friends-list-icon ${
              selectedFriendsList ? "active" : "inactive"
            }`}
            onClick={() => setSelectedFriendsList(!selectedFriendsList)}
          >
            <i id="ls-icon" class="fa-solid fa-user-group"></i>
          </div>
          <Link style={linkStyle} to="/posts/new">
            <div id="ls-icon-container">
              <i id="ls-icon" class="fa-solid fa-pen-to-square"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className={`right-sidebar ${
          selectedStats ? "statsActive" : "statsInactive"
        }`}>
          
        <div className="rs-icon-wrapper">
          <div id="rs-icon-container" className={`stats-icon ${ 
            selectedStats ? "active" : "inactive"
          }`}
            onClick={() => setSelectedStats(!selectedStats)}
          >
            <i id="rs-icon" class="fa-solid fa-chart-simple"></i>
          </div>
        </div>

        <div className='component-container-right' >
          <div className={`loaded-component ${
              selectedStats ? "active" : "inactive"
            }`}>
            <Stats user={user} allPosts={allPosts} />
          </div>
        </div>
        
      </div>

      <div className="bottom-sidebar">
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

    </>
  );
};

export default MainFeedBars
