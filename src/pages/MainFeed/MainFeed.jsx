import { Link } from "react-router-dom";
import "./MainFeed.css";


import { useState } from "react";

//COMPONENETS
import PostList from "../../components/PostList/PostList";
import MainFeedBars from "../../components/MainFeedBars/MainFeedBars";

//SERVICES

const MainFeed = ({ posts, user, feed, handleDecideAction, userProfile, allPosts }) => {
  //STATES
  let [selectedGlobal, setSelectedGlobal] = useState(true);
  let [selectedFriendsFeed, setSelectedFriendsFeed] = useState(false);


  function toggle() {
    if (selectedFriendsFeed === true) {
      selectedGlobal = false;
    }
    if (selectedGlobal === false) {
      selectedFriendsFeed = true;
    }
  }
  toggle();

  return (
    <>
      <MainFeedBars user={user} userProfile={userProfile} allPosts={allPosts}/>
      <div className="btns-container">
        <button
          className={`global-btn ${selectedGlobal ? "active" : "inactive"}`}
          onClick={() => (
            setSelectedGlobal(!selectedGlobal),
            setSelectedFriendsFeed(!selectedFriendsFeed)
          )}
        >
          For You
        </button>
        <button
          className={`friends-btn ${
            selectedFriendsFeed ? "active" : "inactive"
          }`}
          onClick={() => (
            setSelectedFriendsFeed(!selectedFriendsFeed),
            setSelectedGlobal(!selectedGlobal)
          )}
        >
          Friends
        </button>
      </div>

      
      {selectedFriendsFeed ? (
        <>
          <PostList
            posts={feed}
            user={user}
            handleDecideAction={handleDecideAction}
          />
        </>
      ) : (
        <>
          <PostList
            posts={posts}
            user={user}
            handleDecideAction={handleDecideAction}
          />
        </>
      )}
    </>
  );
};

export default MainFeed;
