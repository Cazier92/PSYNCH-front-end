import { Link } from "react-router-dom";
import "./MainFeed.css";

import { useState, useEffect } from "react";

//COMPONENETS
import FriendList from "../../components/FriendList/FriendList";

//SERVICES
import * as emotionPostService from "../../services/emotionPostService";

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

const MainFeedBars = ({ posts, user, feed, handleDecideAction }) => {
  //STATES
  let [selectedFriendsList, setSelectedFriendsList] = useState(false);
  let [selectedHome, setSelectedHome] = useState(true);

  // console.log("Global:", selectedGlobal)
  // console.log("Friends:", selectedFriends)


  return (
    <>
      <div
        className={`left-sidebar ${
          selectedFriendsList ? "friendsActive" : "friendsInactive"
        }`}
      >
        <div className={`component-container ${
          selectedFriendsList ? "active" : "inactive"
        }`}>
          <FriendList user={user} />
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

      <div className="right-sidebar">
        <div id="ls-icon-container">
          <i id="ls-icon" class="fa-solid fa-chart-simple"></i>
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
